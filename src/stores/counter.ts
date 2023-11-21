import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Category, Catalog } from '@/models/types'
import { url } from './vars'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router';

export const useCounterStore = defineStore('counter', () => {

  const counter = ref<Category[]>([])
  const catalog = ref<Catalog[]>([])
  const router = useRouter()
  const name = ref('');
  const cost = ref<number | null>(null);
  const address = ref('');

  const route = useRoute();
  const id = Number(route.params.id);
  const nameNew = ref(route.query.name as string);
  const costNew = ref(Number(route.query.cost) || null);
  const addressNew = ref(route.query.address as string);




  const get_category = async (): Promise<void> => {
    let res = await axios.get(`${url}`)
    if (res.status == 200) {
      counter.value = [...res.data]
    }
  }
  const delete_category = async (id: number): Promise<void> => {
    let result = await axios.delete(`${url}/${id}`)
    if (result.status == 200) {
      counter.value = counter.value.filter((count: Category) => {
        return count.id !== id
      })
    }
  }
  const post_category = async (): Promise<void> => {
    const userObj: Category = {
      id,
      product_type_id: 0,
      name_uz: name.value,
      cost: cost.value,
      address: address.value,
      created_date: new Date(),
    };

    const response = await axios.post(`${url}`, userObj)
    if (response.status == 200) {
      console.log(response.data)
    }
  }


  const pass_category = (id: number)=> {
    const singleData = counter.value.find((el) => el.id === id)
    router.push({
      path: `update/${id}`,
      query: {
        name: singleData?.name_uz,
        cost: singleData?.cost,
        address: singleData?.address
      }
    })
  }

  const put_category = async (): Promise<void> => {
    const userObj: Category = {
      product_type_id: 0,
      id,
      name_uz: nameNew.value,
      cost: isNaN(costNew.value) ? null : costNew.value,
      address: addressNew.value,
      created_date: new Date(),
    };
    const response = await axios.put(`${url}`, userObj);
    if (response.status == 200) {
      console.log(response.data);
    }
  }


  return {
    counter,
    catalog,
    get_category,
    delete_category,
    post_category,
    pass_category,
    put_category
  }
})
