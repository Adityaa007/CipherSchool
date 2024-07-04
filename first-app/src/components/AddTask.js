const AddTask=()=>{
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
        <div className="ui form">
    <form>
    <div className="ui form">
  <div className="field">
    <label>Title</label>
    <input type="text" placeholder="Task Title" name="title"/>
  </div>
</div>
    <div classNamename="field">
    <label>Description</label>
    <textarea rows="2" placeholder="Task Description" name="description"/>
    </div>
    <section>
    <button class="ui secondary button"> Okay</button>
<button class="ui button">Cancel</button>
</section>
    </form>
    </div>
    </>
    
    )
};

export default AddTask;