import { FunctionalComponentMounted } from "@/decorators/Mounted"
import { FunctionalComponent } from "vue"

const number = ref(0)

const buttonRef = ref<HTMLButtonElement>()

class Index {
  @FunctionalComponentMounted(() => {
    console.log("Index Mounted")
    console.log("Mounted", buttonRef.value)
    console.log("Mounted", number.value)
  })
  render: FunctionalComponent = () => {
    console.log("Index Render")
    console.log("Render", buttonRef.value)
    console.log("Render", number.value)
    return (
      <div>
        <div>{number.value}</div>
        <button ref={buttonRef} onClick={() => number.value++}>
          add
        </button>
      </div>
    )
  }
}

export default new Index().render
