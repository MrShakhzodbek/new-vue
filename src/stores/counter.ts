import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { Category, Catalog } from '@/models/types'
import { url } from './vars'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router';



export const useCounterStore = defineStore('counter', () => {
  const counter = ref<Category[]>([])
  const router = useRouter()
  const route = useRoute();
  const id = Number(route.params.id);
  const nameNew = ref(route.query.name as string);
  const costNew = ref(Number(route.query.cost) || null);
  const addressNew = ref(route.query.address as string);




  const get_category = async (): Promise<void> => {
    let res = await axios.get(`${url}`)
    if (res.status === 200) {
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
  const add_category = async (payload: Category): Promise<void> => {
    const obj: Category = {
      id,
      product_type_id: 0,
      name_uz: payload.name_uz,
      cost: payload.cost,
      address: payload.address,
      created_date: new Date().toString()
    }

    let result = await axios.post(`${url}`, obj)
    if (result.status == 200) {
      counter.value = [result.data, ...counter.value]

    }
  }

  const put_category = async (): Promise<void> => {
    const userObj: Category = {
      product_type_id: 0,
      id,
      name_uz: nameNew.value,
      cost: costNew.value,
      address: addressNew.value,
      created_date: new Date(),
    };
    const response = await axios.put(`${url}`, userObj);
    if (response.status == 200) {
      console.log(response.data);
    }
  }

  function passUpdatePage(id: number) {
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


  return {
    counter,
    get_category,
    delete_category,
    add_category,
    passUpdatePage,
    put_category

  }
})
