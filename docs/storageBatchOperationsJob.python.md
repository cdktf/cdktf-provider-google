# `storageBatchOperationsJob` Submodule <a name="`storageBatchOperationsJob` Submodule" id="@cdktf/provider-google.storageBatchOperationsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageBatchOperationsJob <a name="StorageBatchOperationsJob" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job google_storage_batch_operations_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_list: StorageBatchOperationsJobBucketListStruct = None,
  delete_object: StorageBatchOperationsJobDeleteObject = None,
  delete_protection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  job_id: str = None,
  project: str = None,
  put_metadata: StorageBatchOperationsJobPutMetadata = None,
  put_object_hold: StorageBatchOperationsJobPutObjectHold = None,
  rewrite_object: StorageBatchOperationsJobRewriteObject = None,
  timeouts: StorageBatchOperationsJobTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.bucketList">bucket_list</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteObject">delete_object</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteProtection">delete_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.jobId">job_id</a></code> | <code>str</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putMetadata">put_metadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putObjectHold">put_object_hold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.rewriteObject">rewrite_object</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_list`<sup>Optional</sup> <a name="bucket_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.bucketList"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#bucket_list StorageBatchOperationsJob#bucket_list}

---

##### `delete_object`<sup>Optional</sup> <a name="delete_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteObject"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete_object StorageBatchOperationsJob#delete_object}

---

##### `delete_protection`<sup>Optional</sup> <a name="delete_protection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.deleteProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete_protection StorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.jobId"></a>

- *Type:* str

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#job_id StorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}.

---

##### `put_metadata`<sup>Optional</sup> <a name="put_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#put_metadata StorageBatchOperationsJob#put_metadata}

---

##### `put_object_hold`<sup>Optional</sup> <a name="put_object_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.putObjectHold"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#put_object_hold StorageBatchOperationsJob#put_object_hold}

---

##### `rewrite_object`<sup>Optional</sup> <a name="rewrite_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.rewriteObject"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#rewrite_object StorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#timeouts StorageBatchOperationsJob#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList">put_bucket_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject">put_delete_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata">put_put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold">put_put_object_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject">put_rewrite_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList">reset_bucket_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject">reset_delete_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection">reset_delete_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId">reset_job_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata">reset_put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold">reset_put_object_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject">reset_rewrite_object</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_bucket_list` <a name="put_bucket_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList"></a>

```python
def put_bucket_list(
  buckets: StorageBatchOperationsJobBucketListBuckets
) -> None
```

###### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putBucketList.parameter.buckets"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#buckets StorageBatchOperationsJob#buckets}

---

##### `put_delete_object` <a name="put_delete_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject"></a>

```python
def put_delete_object(
  permanent_object_deletion_enabled: typing.Union[bool, IResolvable]
) -> None
```

###### `permanent_object_deletion_enabled`<sup>Required</sup> <a name="permanent_object_deletion_enabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putDeleteObject.parameter.permanentObjectDeletionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#permanent_object_deletion_enabled StorageBatchOperationsJob#permanent_object_deletion_enabled}

---

##### `put_put_metadata` <a name="put_put_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata"></a>

```python
def put_put_metadata(
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  custom_metadata: typing.Mapping[str] = None,
  custom_time: str = None
) -> None
```

###### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.cacheControl"></a>

- *Type:* str

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#cache_control StorageBatchOperationsJob#cache_control}

---

###### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.contentDisposition"></a>

- *Type:* str

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_disposition StorageBatchOperationsJob#content_disposition}

---

###### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.contentEncoding"></a>

- *Type:* str

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_encoding StorageBatchOperationsJob#content_encoding}

---

###### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.contentLanguage"></a>

- *Type:* str

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_language StorageBatchOperationsJob#content_language}

---

###### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.contentType"></a>

- *Type:* str

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_type StorageBatchOperationsJob#content_type}

---

###### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.customMetadata"></a>

- *Type:* typing.Mapping[str]

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#custom_metadata StorageBatchOperationsJob#custom_metadata}

---

###### `custom_time`<sup>Optional</sup> <a name="custom_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutMetadata.parameter.customTime"></a>

- *Type:* str

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#custom_time StorageBatchOperationsJob#custom_time}

---

##### `put_put_object_hold` <a name="put_put_object_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold"></a>

```python
def put_put_object_hold(
  event_based_hold: str = None,
  temporary_hold: str = None
) -> None
```

###### `event_based_hold`<sup>Optional</sup> <a name="event_based_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold.parameter.eventBasedHold"></a>

- *Type:* str

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#event_based_hold StorageBatchOperationsJob#event_based_hold}

---

###### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putPutObjectHold.parameter.temporaryHold"></a>

- *Type:* str

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#temporary_hold StorageBatchOperationsJob#temporary_hold}

---

##### `put_rewrite_object` <a name="put_rewrite_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject"></a>

```python
def put_rewrite_object(
  kms_key: str
) -> None
```

###### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putRewriteObject.parameter.kmsKey"></a>

- *Type:* str

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#kms_key StorageBatchOperationsJob#kms_key}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}.

---

##### `reset_bucket_list` <a name="reset_bucket_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetBucketList"></a>

```python
def reset_bucket_list() -> None
```

##### `reset_delete_object` <a name="reset_delete_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteObject"></a>

```python
def reset_delete_object() -> None
```

##### `reset_delete_protection` <a name="reset_delete_protection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetDeleteProtection"></a>

```python
def reset_delete_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_job_id` <a name="reset_job_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetJobId"></a>

```python
def reset_job_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_put_metadata` <a name="reset_put_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutMetadata"></a>

```python
def reset_put_metadata() -> None
```

##### `reset_put_object_hold` <a name="reset_put_object_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetPutObjectHold"></a>

```python
def reset_put_object_hold() -> None
```

##### `reset_rewrite_object` <a name="reset_rewrite_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetRewriteObject"></a>

```python
def reset_rewrite_object() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StorageBatchOperationsJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJob.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJob.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StorageBatchOperationsJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StorageBatchOperationsJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StorageBatchOperationsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageBatchOperationsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList">bucket_list</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime">complete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject">delete_object</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata">put_metadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold">put_object_hold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject">rewrite_object</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime">schedule_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput">bucket_list_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput">delete_object_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput">delete_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput">job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput">put_metadata_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput">put_object_hold_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput">rewrite_object_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection">delete_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_list`<sup>Required</sup> <a name="bucket_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketList"></a>

```python
bucket_list: StorageBatchOperationsJobBucketListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference">StorageBatchOperationsJobBucketListStructOutputReference</a>

---

##### `complete_time`<sup>Required</sup> <a name="complete_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.completeTime"></a>

```python
complete_time: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_object`<sup>Required</sup> <a name="delete_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObject"></a>

```python
delete_object: StorageBatchOperationsJobDeleteObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference">StorageBatchOperationsJobDeleteObjectOutputReference</a>

---

##### `put_metadata`<sup>Required</sup> <a name="put_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadata"></a>

```python
put_metadata: StorageBatchOperationsJobPutMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference">StorageBatchOperationsJobPutMetadataOutputReference</a>

---

##### `put_object_hold`<sup>Required</sup> <a name="put_object_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHold"></a>

```python
put_object_hold: StorageBatchOperationsJobPutObjectHoldOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference">StorageBatchOperationsJobPutObjectHoldOutputReference</a>

---

##### `rewrite_object`<sup>Required</sup> <a name="rewrite_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObject"></a>

```python
rewrite_object: StorageBatchOperationsJobRewriteObjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference">StorageBatchOperationsJobRewriteObjectOutputReference</a>

---

##### `schedule_time`<sup>Required</sup> <a name="schedule_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.scheduleTime"></a>

```python
schedule_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeouts"></a>

```python
timeouts: StorageBatchOperationsJobTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference">StorageBatchOperationsJobTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `bucket_list_input`<sup>Optional</sup> <a name="bucket_list_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.bucketListInput"></a>

```python
bucket_list_input: StorageBatchOperationsJobBucketListStruct
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---

##### `delete_object_input`<sup>Optional</sup> <a name="delete_object_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteObjectInput"></a>

```python
delete_object_input: StorageBatchOperationsJobDeleteObject
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---

##### `delete_protection_input`<sup>Optional</sup> <a name="delete_protection_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtectionInput"></a>

```python
delete_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `job_id_input`<sup>Optional</sup> <a name="job_id_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobIdInput"></a>

```python
job_id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `put_metadata_input`<sup>Optional</sup> <a name="put_metadata_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putMetadataInput"></a>

```python
put_metadata_input: StorageBatchOperationsJobPutMetadata
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---

##### `put_object_hold_input`<sup>Optional</sup> <a name="put_object_hold_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.putObjectHoldInput"></a>

```python
put_object_hold_input: StorageBatchOperationsJobPutObjectHold
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---

##### `rewrite_object_input`<sup>Optional</sup> <a name="rewrite_object_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.rewriteObjectInput"></a>

```python
rewrite_object_input: StorageBatchOperationsJobRewriteObject
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StorageBatchOperationsJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>]

---

##### `delete_protection`<sup>Required</sup> <a name="delete_protection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.deleteProtection"></a>

```python
delete_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageBatchOperationsJobBucketListBuckets <a name="StorageBatchOperationsJobBucketListBuckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets(
  bucket: str,
  manifest: StorageBatchOperationsJobBucketListBucketsManifest = None,
  prefix_list: StorageBatchOperationsJobBucketListBucketsPrefixListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket">bucket</a></code> | <code>str</code> | Bucket name for the objects to be transformed. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | manifest block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList">prefix_list</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | prefix_list block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#bucket StorageBatchOperationsJob#bucket}

---

##### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.manifest"></a>

```python
manifest: StorageBatchOperationsJobBucketListBucketsManifest
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#manifest StorageBatchOperationsJob#manifest}

---

##### `prefix_list`<sup>Optional</sup> <a name="prefix_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets.property.prefixList"></a>

```python
prefix_list: StorageBatchOperationsJobBucketListBucketsPrefixListStruct
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#prefix_list StorageBatchOperationsJob#prefix_list}

---

### StorageBatchOperationsJobBucketListBucketsManifest <a name="StorageBatchOperationsJobBucketListBucketsManifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest(
  manifest_location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation">manifest_location</a></code> | <code>str</code> | Specifies objects in a manifest file. |

---

##### `manifest_location`<sup>Optional</sup> <a name="manifest_location" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest.property.manifestLocation"></a>

```python
manifest_location: str
```

- *Type:* str

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#manifest_location StorageBatchOperationsJob#manifest_location}

---

### StorageBatchOperationsJobBucketListBucketsPrefixListStruct <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct(
  included_object_prefixes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes">included_object_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}. |

---

##### `included_object_prefixes`<sup>Optional</sup> <a name="included_object_prefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct.property.includedObjectPrefixes"></a>

```python
included_object_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}.

---

### StorageBatchOperationsJobBucketListStruct <a name="StorageBatchOperationsJobBucketListStruct" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct(
  buckets: StorageBatchOperationsJobBucketListBuckets
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | buckets block. |

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct.property.buckets"></a>

```python
buckets: StorageBatchOperationsJobBucketListBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

buckets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#buckets StorageBatchOperationsJob#buckets}

---

### StorageBatchOperationsJobConfig <a name="StorageBatchOperationsJobConfig" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_list: StorageBatchOperationsJobBucketListStruct = None,
  delete_object: StorageBatchOperationsJobDeleteObject = None,
  delete_protection: typing.Union[bool, IResolvable] = None,
  id: str = None,
  job_id: str = None,
  project: str = None,
  put_metadata: StorageBatchOperationsJobPutMetadata = None,
  put_object_hold: StorageBatchOperationsJobPutObjectHold = None,
  rewrite_object: StorageBatchOperationsJobRewriteObject = None,
  timeouts: StorageBatchOperationsJobTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList">bucket_list</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | bucket_list block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject">delete_object</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | delete_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection">delete_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to 'true', the storage batch operation job will not be deleted and new job will be created. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId">job_id</a></code> | <code>str</code> | The ID of the job. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata">put_metadata</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | put_metadata block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold">put_object_hold</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | put_object_hold block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject">rewrite_object</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | rewrite_object block. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_list`<sup>Optional</sup> <a name="bucket_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.bucketList"></a>

```python
bucket_list: StorageBatchOperationsJobBucketListStruct
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

bucket_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#bucket_list StorageBatchOperationsJob#bucket_list}

---

##### `delete_object`<sup>Optional</sup> <a name="delete_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteObject"></a>

```python
delete_object: StorageBatchOperationsJobDeleteObject
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

delete_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete_object StorageBatchOperationsJob#delete_object}

---

##### `delete_protection`<sup>Optional</sup> <a name="delete_protection" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.deleteProtection"></a>

```python
delete_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to 'true', the storage batch operation job will not be deleted and new job will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete_protection StorageBatchOperationsJob#delete_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#id StorageBatchOperationsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `job_id`<sup>Optional</sup> <a name="job_id" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

The ID of the job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#job_id StorageBatchOperationsJob#job_id}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#project StorageBatchOperationsJob#project}.

---

##### `put_metadata`<sup>Optional</sup> <a name="put_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putMetadata"></a>

```python
put_metadata: StorageBatchOperationsJobPutMetadata
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

put_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#put_metadata StorageBatchOperationsJob#put_metadata}

---

##### `put_object_hold`<sup>Optional</sup> <a name="put_object_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.putObjectHold"></a>

```python
put_object_hold: StorageBatchOperationsJobPutObjectHold
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

put_object_hold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#put_object_hold StorageBatchOperationsJob#put_object_hold}

---

##### `rewrite_object`<sup>Optional</sup> <a name="rewrite_object" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.rewriteObject"></a>

```python
rewrite_object: StorageBatchOperationsJobRewriteObject
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

rewrite_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#rewrite_object StorageBatchOperationsJob#rewrite_object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobConfig.property.timeouts"></a>

```python
timeouts: StorageBatchOperationsJobTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#timeouts StorageBatchOperationsJob#timeouts}

---

### StorageBatchOperationsJobDeleteObject <a name="StorageBatchOperationsJobDeleteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject(
  permanent_object_deletion_enabled: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled">permanent_object_deletion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | enable flag to permanently delete object and all object versions if versioning is enabled on bucket. |

---

##### `permanent_object_deletion_enabled`<sup>Required</sup> <a name="permanent_object_deletion_enabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject.property.permanentObjectDeletionEnabled"></a>

```python
permanent_object_deletion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

enable flag to permanently delete object and all object versions if versioning is enabled on bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#permanent_object_deletion_enabled StorageBatchOperationsJob#permanent_object_deletion_enabled}

---

### StorageBatchOperationsJobPutMetadata <a name="StorageBatchOperationsJobPutMetadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata(
  cache_control: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_language: str = None,
  content_type: str = None,
  custom_metadata: typing.Mapping[str] = None,
  custom_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl">cache_control</a></code> | <code>str</code> | Cache-Control directive to specify caching behavior of object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Content-Disposition of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Content Encoding of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage">content_language</a></code> | <code>str</code> | Content-Language of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType">content_type</a></code> | <code>str</code> | Content-Type of the object data. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | User-provided metadata, in key/value pairs. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime">custom_time</a></code> | <code>str</code> | Updates the objects fixed custom time metadata. |

---

##### `cache_control`<sup>Optional</sup> <a name="cache_control" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

Cache-Control directive to specify caching behavior of object data.

If omitted and object is accessible to all anonymous users, the default will be public, max-age=3600

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#cache_control StorageBatchOperationsJob#cache_control}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Content-Disposition of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_disposition StorageBatchOperationsJob#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Content Encoding of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_encoding StorageBatchOperationsJob#content_encoding}

---

##### `content_language`<sup>Optional</sup> <a name="content_language" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

Content-Language of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_language StorageBatchOperationsJob#content_language}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Content-Type of the object data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#content_type StorageBatchOperationsJob#content_type}

---

##### `custom_metadata`<sup>Optional</sup> <a name="custom_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-provided metadata, in key/value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#custom_metadata StorageBatchOperationsJob#custom_metadata}

---

##### `custom_time`<sup>Optional</sup> <a name="custom_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata.property.customTime"></a>

```python
custom_time: str
```

- *Type:* str

Updates the objects fixed custom time metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#custom_time StorageBatchOperationsJob#custom_time}

---

### StorageBatchOperationsJobPutObjectHold <a name="StorageBatchOperationsJobPutObjectHold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold(
  event_based_hold: str = None,
  temporary_hold: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold">event_based_hold</a></code> | <code>str</code> | set/unset to update event based hold for objects. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold">temporary_hold</a></code> | <code>str</code> | set/unset to update temporary based hold for objects. |

---

##### `event_based_hold`<sup>Optional</sup> <a name="event_based_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.eventBasedHold"></a>

```python
event_based_hold: str
```

- *Type:* str

set/unset to update event based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#event_based_hold StorageBatchOperationsJob#event_based_hold}

---

##### `temporary_hold`<sup>Optional</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold.property.temporaryHold"></a>

```python
temporary_hold: str
```

- *Type:* str

set/unset to update temporary based hold for objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#temporary_hold StorageBatchOperationsJob#temporary_hold}

---

### StorageBatchOperationsJobRewriteObject <a name="StorageBatchOperationsJobRewriteObject" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject(
  kms_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey">kms_key</a></code> | <code>str</code> | valid kms key. |

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

valid kms key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#kms_key StorageBatchOperationsJob#kms_key}

---

### StorageBatchOperationsJobTimeouts <a name="StorageBatchOperationsJobTimeouts" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#create StorageBatchOperationsJob#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#delete StorageBatchOperationsJob#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#update StorageBatchOperationsJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageBatchOperationsJobBucketListBucketsManifestOutputReference <a name="StorageBatchOperationsJobBucketListBucketsManifestOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation">reset_manifest_location</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_manifest_location` <a name="reset_manifest_location" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.resetManifestLocation"></a>

```python
def reset_manifest_location() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput">manifest_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation">manifest_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest_location_input`<sup>Optional</sup> <a name="manifest_location_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocationInput"></a>

```python
manifest_location_input: str
```

- *Type:* str

---

##### `manifest_location`<sup>Required</sup> <a name="manifest_location" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.manifestLocation"></a>

```python
manifest_location: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobBucketListBucketsManifest
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---


### StorageBatchOperationsJobBucketListBucketsOutputReference <a name="StorageBatchOperationsJobBucketListBucketsOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest">put_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList">put_prefix_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest">reset_manifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList">reset_prefix_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_manifest` <a name="put_manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest"></a>

```python
def put_manifest(
  manifest_location: str = None
) -> None
```

###### `manifest_location`<sup>Optional</sup> <a name="manifest_location" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putManifest.parameter.manifestLocation"></a>

- *Type:* str

Specifies objects in a manifest file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#manifest_location StorageBatchOperationsJob#manifest_location}

---

##### `put_prefix_list` <a name="put_prefix_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList"></a>

```python
def put_prefix_list(
  included_object_prefixes: typing.List[str] = None
) -> None
```

###### `included_object_prefixes`<sup>Optional</sup> <a name="included_object_prefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.putPrefixList.parameter.includedObjectPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#included_object_prefixes StorageBatchOperationsJob#included_object_prefixes}.

---

##### `reset_manifest` <a name="reset_manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetManifest"></a>

```python
def reset_manifest() -> None
```

##### `reset_prefix_list` <a name="reset_prefix_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.resetPrefixList"></a>

```python
def reset_prefix_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest">manifest</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList">prefix_list</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput">manifest_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput">prefix_list_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifest"></a>

```python
manifest: StorageBatchOperationsJobBucketListBucketsManifestOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifestOutputReference">StorageBatchOperationsJobBucketListBucketsManifestOutputReference</a>

---

##### `prefix_list`<sup>Required</sup> <a name="prefix_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixList"></a>

```python
prefix_list: StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference">StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `manifest_input`<sup>Optional</sup> <a name="manifest_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.manifestInput"></a>

```python
manifest_input: StorageBatchOperationsJobBucketListBucketsManifest
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

---

##### `prefix_list_input`<sup>Optional</sup> <a name="prefix_list_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.prefixListInput"></a>

```python
prefix_list_input: StorageBatchOperationsJobBucketListBucketsPrefixListStruct
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobBucketListBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---


### StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference <a name="StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes">reset_included_object_prefixes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_included_object_prefixes` <a name="reset_included_object_prefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.resetIncludedObjectPrefixes"></a>

```python
def reset_included_object_prefixes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput">included_object_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes">included_object_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `included_object_prefixes_input`<sup>Optional</sup> <a name="included_object_prefixes_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixesInput"></a>

```python
included_object_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `included_object_prefixes`<sup>Required</sup> <a name="included_object_prefixes" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.includedObjectPrefixes"></a>

```python
included_object_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStructOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobBucketListBucketsPrefixListStruct
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

---


### StorageBatchOperationsJobBucketListStructOutputReference <a name="StorageBatchOperationsJobBucketListStructOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets">put_buckets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_buckets` <a name="put_buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets"></a>

```python
def put_buckets(
  bucket: str,
  manifest: StorageBatchOperationsJobBucketListBucketsManifest = None,
  prefix_list: StorageBatchOperationsJobBucketListBucketsPrefixListStruct = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.bucket"></a>

- *Type:* str

Bucket name for the objects to be transformed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#bucket StorageBatchOperationsJob#bucket}

---

###### `manifest`<sup>Optional</sup> <a name="manifest" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.manifest"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsManifest">StorageBatchOperationsJobBucketListBucketsManifest</a>

manifest block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#manifest StorageBatchOperationsJob#manifest}

---

###### `prefix_list`<sup>Optional</sup> <a name="prefix_list" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.putBuckets.parameter.prefixList"></a>

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsPrefixListStruct">StorageBatchOperationsJobBucketListBucketsPrefixListStruct</a>

prefix_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.40.0/docs/resources/storage_batch_operations_job#prefix_list StorageBatchOperationsJob#prefix_list}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets">buckets</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput">buckets_input</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `buckets`<sup>Required</sup> <a name="buckets" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.buckets"></a>

```python
buckets: StorageBatchOperationsJobBucketListBucketsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBucketsOutputReference">StorageBatchOperationsJobBucketListBucketsOutputReference</a>

---

##### `buckets_input`<sup>Optional</sup> <a name="buckets_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.bucketsInput"></a>

```python
buckets_input: StorageBatchOperationsJobBucketListBuckets
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListBuckets">StorageBatchOperationsJobBucketListBuckets</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStructOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobBucketListStruct
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobBucketListStruct">StorageBatchOperationsJobBucketListStruct</a>

---


### StorageBatchOperationsJobDeleteObjectOutputReference <a name="StorageBatchOperationsJobDeleteObjectOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput">permanent_object_deletion_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled">permanent_object_deletion_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permanent_object_deletion_enabled_input`<sup>Optional</sup> <a name="permanent_object_deletion_enabled_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabledInput"></a>

```python
permanent_object_deletion_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `permanent_object_deletion_enabled`<sup>Required</sup> <a name="permanent_object_deletion_enabled" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.permanentObjectDeletionEnabled"></a>

```python
permanent_object_deletion_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObjectOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobDeleteObject
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobDeleteObject">StorageBatchOperationsJobDeleteObject</a>

---


### StorageBatchOperationsJobPutMetadataOutputReference <a name="StorageBatchOperationsJobPutMetadataOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl">reset_cache_control</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage">reset_content_language</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata">reset_custom_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime">reset_custom_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cache_control` <a name="reset_cache_control" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCacheControl"></a>

```python
def reset_cache_control() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_language` <a name="reset_content_language" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentLanguage"></a>

```python
def reset_content_language() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_custom_metadata` <a name="reset_custom_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomMetadata"></a>

```python
def reset_custom_metadata() -> None
```

##### `reset_custom_time` <a name="reset_custom_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.resetCustomTime"></a>

```python
def reset_custom_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput">cache_control_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput">content_language_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput">custom_metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput">custom_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl">cache_control</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage">content_language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata">custom_metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime">custom_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cache_control_input`<sup>Optional</sup> <a name="cache_control_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControlInput"></a>

```python
cache_control_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_language_input`<sup>Optional</sup> <a name="content_language_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguageInput"></a>

```python
content_language_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `custom_metadata_input`<sup>Optional</sup> <a name="custom_metadata_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadataInput"></a>

```python
custom_metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `custom_time_input`<sup>Optional</sup> <a name="custom_time_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTimeInput"></a>

```python
custom_time_input: str
```

- *Type:* str

---

##### `cache_control`<sup>Required</sup> <a name="cache_control" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.cacheControl"></a>

```python
cache_control: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_language`<sup>Required</sup> <a name="content_language" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentLanguage"></a>

```python
content_language: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `custom_metadata`<sup>Required</sup> <a name="custom_metadata" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customMetadata"></a>

```python
custom_metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `custom_time`<sup>Required</sup> <a name="custom_time" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.customTime"></a>

```python
custom_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadataOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobPutMetadata
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutMetadata">StorageBatchOperationsJobPutMetadata</a>

---


### StorageBatchOperationsJobPutObjectHoldOutputReference <a name="StorageBatchOperationsJobPutObjectHoldOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold">reset_event_based_hold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold">reset_temporary_hold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_event_based_hold` <a name="reset_event_based_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetEventBasedHold"></a>

```python
def reset_event_based_hold() -> None
```

##### `reset_temporary_hold` <a name="reset_temporary_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.resetTemporaryHold"></a>

```python
def reset_temporary_hold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput">event_based_hold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput">temporary_hold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold">event_based_hold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold">temporary_hold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_based_hold_input`<sup>Optional</sup> <a name="event_based_hold_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHoldInput"></a>

```python
event_based_hold_input: str
```

- *Type:* str

---

##### `temporary_hold_input`<sup>Optional</sup> <a name="temporary_hold_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHoldInput"></a>

```python
temporary_hold_input: str
```

- *Type:* str

---

##### `event_based_hold`<sup>Required</sup> <a name="event_based_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.eventBasedHold"></a>

```python
event_based_hold: str
```

- *Type:* str

---

##### `temporary_hold`<sup>Required</sup> <a name="temporary_hold" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.temporaryHold"></a>

```python
temporary_hold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHoldOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobPutObjectHold
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobPutObjectHold">StorageBatchOperationsJobPutObjectHold</a>

---


### StorageBatchOperationsJobRewriteObjectOutputReference <a name="StorageBatchOperationsJobRewriteObjectOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput">kms_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey">kms_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_input`<sup>Optional</sup> <a name="kms_key_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKeyInput"></a>

```python
kms_key_input: str
```

- *Type:* str

---

##### `kms_key`<sup>Required</sup> <a name="kms_key" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.kmsKey"></a>

```python
kms_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObjectOutputReference.property.internalValue"></a>

```python
internal_value: StorageBatchOperationsJobRewriteObject
```

- *Type:* <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobRewriteObject">StorageBatchOperationsJobRewriteObject</a>

---


### StorageBatchOperationsJobTimeoutsOutputReference <a name="StorageBatchOperationsJobTimeoutsOutputReference" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import storage_batch_operations_job

storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StorageBatchOperationsJobTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.storageBatchOperationsJob.StorageBatchOperationsJobTimeouts">StorageBatchOperationsJobTimeouts</a>]

---



