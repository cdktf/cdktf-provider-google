# `computeStoragePool` Submodule <a name="`computeStoragePool` Submodule" id="@cdktf/provider-google.computeStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStoragePool <a name="ComputeStoragePool" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool google_compute_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  pool_provisioned_capacity_gb: str,
  pool_provisioned_throughput: str,
  storage_pool_type: str,
  capacity_provisioning_type: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  performance_provisioning_type: str = None,
  pool_provisioned_iops: str = None,
  project: str = None,
  timeouts: ComputeStoragePoolTimeouts = None,
  zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb">pool_provisioned_capacity_gb</a></code> | <code>str</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedThroughput">pool_provisioned_throughput</a></code> | <code>str</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.storagePoolType">storage_pool_type</a></code> | <code>str</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.capacityProvisioningType">capacity_provisioning_type</a></code> | <code>str</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.performanceProvisioningType">performance_provisioning_type</a></code> | <code>str</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedIops">pool_provisioned_iops</a></code> | <code>str</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.zone">zone</a></code> | <code>str</code> | A reference to the zone where the storage pool resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#name ComputeStoragePool#name}

---

##### `pool_provisioned_capacity_gb`<sup>Required</sup> <a name="pool_provisioned_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedCapacityGb"></a>

- *Type:* str

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#pool_provisioned_capacity_gb ComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `pool_provisioned_throughput`<sup>Required</sup> <a name="pool_provisioned_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedThroughput"></a>

- *Type:* str

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#pool_provisioned_throughput ComputeStoragePool#pool_provisioned_throughput}

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.storagePoolType"></a>

- *Type:* str

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#storage_pool_type ComputeStoragePool#storage_pool_type}

---

##### `capacity_provisioning_type`<sup>Optional</sup> <a name="capacity_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.capacityProvisioningType"></a>

- *Type:* str

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#capacity_provisioning_type ComputeStoragePool#capacity_provisioning_type}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.deletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#deletion_protection ComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.description"></a>

- *Type:* str

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#description ComputeStoragePool#description}

---

##### `performance_provisioning_type`<sup>Optional</sup> <a name="performance_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.performanceProvisioningType"></a>

- *Type:* str

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#performance_provisioning_type ComputeStoragePool#performance_provisioning_type}

---

##### `pool_provisioned_iops`<sup>Optional</sup> <a name="pool_provisioned_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.poolProvisionedIops"></a>

- *Type:* str

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#pool_provisioned_iops ComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#timeouts ComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.Initializer.parameter.zone"></a>

- *Type:* str

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#zone ComputeStoragePool#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetCapacityProvisioningType">reset_capacity_provisioning_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetPerformanceProvisioningType">reset_performance_provisioning_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetPoolProvisionedIops">reset_pool_provisioned_iops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetZone">reset_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#create ComputeStoragePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#delete ComputeStoragePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#update ComputeStoragePool#update}.

---

##### `reset_capacity_provisioning_type` <a name="reset_capacity_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetCapacityProvisioningType"></a>

```python
def reset_capacity_provisioning_type() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_performance_provisioning_type` <a name="reset_performance_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetPerformanceProvisioningType"></a>

```python
def reset_performance_provisioning_type() -> None
```

##### `reset_pool_provisioned_iops` <a name="reset_pool_provisioned_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetPoolProvisionedIops"></a>

```python
def reset_pool_provisioned_iops() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_zone` <a name="reset_zone" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.resetZone"></a>

```python
def reset_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeStoragePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.labelFingerprint">label_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.resourceStatus">resource_status</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList">ComputeStoragePoolResourceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.status">status</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList">ComputeStoragePoolStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference">ComputeStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningTypeInput">capacity_provisioning_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningTypeInput">performance_provisioning_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGbInput">pool_provisioned_capacity_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIopsInput">pool_provisioned_iops_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughputInput">pool_provisioned_throughput_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolTypeInput">storage_pool_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningType">capacity_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningType">performance_provisioning_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGb">pool_provisioned_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIops">pool_provisioned_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughput">pool_provisioned_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolType">storage_pool_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.zone">zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `label_fingerprint`<sup>Required</sup> <a name="label_fingerprint" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.labelFingerprint"></a>

```python
label_fingerprint: str
```

- *Type:* str

---

##### `resource_status`<sup>Required</sup> <a name="resource_status" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.resourceStatus"></a>

```python
resource_status: ComputeStoragePoolResourceStatusList
```

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList">ComputeStoragePoolResourceStatusList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.status"></a>

```python
status: ComputeStoragePoolStatusList
```

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList">ComputeStoragePoolStatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.timeouts"></a>

```python
timeouts: ComputeStoragePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference">ComputeStoragePoolTimeoutsOutputReference</a>

---

##### `capacity_provisioning_type_input`<sup>Optional</sup> <a name="capacity_provisioning_type_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningTypeInput"></a>

```python
capacity_provisioning_type_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtectionInput"></a>

```python
deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `performance_provisioning_type_input`<sup>Optional</sup> <a name="performance_provisioning_type_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningTypeInput"></a>

```python
performance_provisioning_type_input: str
```

- *Type:* str

---

##### `pool_provisioned_capacity_gb_input`<sup>Optional</sup> <a name="pool_provisioned_capacity_gb_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGbInput"></a>

```python
pool_provisioned_capacity_gb_input: str
```

- *Type:* str

---

##### `pool_provisioned_iops_input`<sup>Optional</sup> <a name="pool_provisioned_iops_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIopsInput"></a>

```python
pool_provisioned_iops_input: str
```

- *Type:* str

---

##### `pool_provisioned_throughput_input`<sup>Optional</sup> <a name="pool_provisioned_throughput_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughputInput"></a>

```python
pool_provisioned_throughput_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `storage_pool_type_input`<sup>Optional</sup> <a name="storage_pool_type_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolTypeInput"></a>

```python
storage_pool_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeStoragePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `capacity_provisioning_type`<sup>Required</sup> <a name="capacity_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.capacityProvisioningType"></a>

```python
capacity_provisioning_type: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `performance_provisioning_type`<sup>Required</sup> <a name="performance_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.performanceProvisioningType"></a>

```python
performance_provisioning_type: str
```

- *Type:* str

---

##### `pool_provisioned_capacity_gb`<sup>Required</sup> <a name="pool_provisioned_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedCapacityGb"></a>

```python
pool_provisioned_capacity_gb: str
```

- *Type:* str

---

##### `pool_provisioned_iops`<sup>Required</sup> <a name="pool_provisioned_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedIops"></a>

```python
pool_provisioned_iops: str
```

- *Type:* str

---

##### `pool_provisioned_throughput`<sup>Required</sup> <a name="pool_provisioned_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.poolProvisionedThroughput"></a>

```python
pool_provisioned_throughput: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.storagePoolType"></a>

```python
storage_pool_type: str
```

- *Type:* str

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStoragePoolConfig <a name="ComputeStoragePoolConfig" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  pool_provisioned_capacity_gb: str,
  pool_provisioned_throughput: str,
  storage_pool_type: str,
  capacity_provisioning_type: str = None,
  deletion_protection: typing.Union[bool, IResolvable] = None,
  description: str = None,
  performance_provisioning_type: str = None,
  pool_provisioned_iops: str = None,
  project: str = None,
  timeouts: ComputeStoragePoolTimeouts = None,
  zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedCapacityGb">pool_provisioned_capacity_gb</a></code> | <code>str</code> | Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedThroughput">pool_provisioned_throughput</a></code> | <code>str</code> | Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.storagePoolType">storage_pool_type</a></code> | <code>str</code> | Type of the storage pool. For example, the following are valid values:. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.capacityProvisioningType">capacity_provisioning_type</a></code> | <code>str</code> | Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.deletionProtection">deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether Terraform will be prevented from destroying the StoragePool. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.description">description</a></code> | <code>str</code> | A description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.performanceProvisioningType">performance_provisioning_type</a></code> | <code>str</code> | Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"]. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedIops">pool_provisioned_iops</a></code> | <code>str</code> | Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.zone">zone</a></code> | <code>str</code> | A reference to the zone where the storage pool resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is created.
The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter,
and all following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#name ComputeStoragePool#name}

---

##### `pool_provisioned_capacity_gb`<sup>Required</sup> <a name="pool_provisioned_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedCapacityGb"></a>

```python
pool_provisioned_capacity_gb: str
```

- *Type:* str

Size, in GiB, of the storage pool. For more information about the size limits, see https://cloud.google.com/compute/docs/disks/storage-pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#pool_provisioned_capacity_gb ComputeStoragePool#pool_provisioned_capacity_gb}

---

##### `pool_provisioned_throughput`<sup>Required</sup> <a name="pool_provisioned_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedThroughput"></a>

```python
pool_provisioned_throughput: str
```

- *Type:* str

Provisioned throughput, in MB/s, of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced' or 'hyperdisk-throughput'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#pool_provisioned_throughput ComputeStoragePool#pool_provisioned_throughput}

---

##### `storage_pool_type`<sup>Required</sup> <a name="storage_pool_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.storagePoolType"></a>

```python
storage_pool_type: str
```

- *Type:* str

Type of the storage pool. For example, the following are valid values:.

* 'https://www.googleapis.com/compute/v1/projects/{project_id}/zones/{zone}/storagePoolTypes/hyperdisk-balanced'
* 'hyperdisk-throughput'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#storage_pool_type ComputeStoragePool#storage_pool_type}

---

##### `capacity_provisioning_type`<sup>Optional</sup> <a name="capacity_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.capacityProvisioningType"></a>

```python
capacity_provisioning_type: str
```

- *Type:* str

Provisioning type of the byte capacity of the pool. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#capacity_provisioning_type ComputeStoragePool#capacity_provisioning_type}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.deletionProtection"></a>

```python
deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether Terraform will be prevented from destroying the StoragePool.

When the field is set to true or unset in Terraform state, a 'terraform apply'
or 'terraform destroy' that would delete the StoragePool will fail.
When the field is set to false, deleting the StoragePool is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#deletion_protection ComputeStoragePool#deletion_protection}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#description ComputeStoragePool#description}

---

##### `performance_provisioning_type`<sup>Optional</sup> <a name="performance_provisioning_type" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.performanceProvisioningType"></a>

```python
performance_provisioning_type: str
```

- *Type:* str

Provisioning type of the performance-related parameters of the pool, such as throughput and IOPS. Possible values: ["STANDARD", "ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#performance_provisioning_type ComputeStoragePool#performance_provisioning_type}

---

##### `pool_provisioned_iops`<sup>Optional</sup> <a name="pool_provisioned_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.poolProvisionedIops"></a>

```python
pool_provisioned_iops: str
```

- *Type:* str

Provisioned IOPS of the storage pool. Only relevant if the storage pool type is 'hyperdisk-balanced'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#pool_provisioned_iops ComputeStoragePool#pool_provisioned_iops}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#project ComputeStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.timeouts"></a>

```python
timeouts: ComputeStoragePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#timeouts ComputeStoragePool#timeouts}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolConfig.property.zone"></a>

```python
zone: str
```

- *Type:* str

A reference to the zone where the storage pool resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#zone ComputeStoragePool#zone}

---

### ComputeStoragePoolResourceStatus <a name="ComputeStoragePoolResourceStatus" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolResourceStatus()
```


### ComputeStoragePoolStatus <a name="ComputeStoragePoolStatus" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolStatus()
```


### ComputeStoragePoolTimeouts <a name="ComputeStoragePoolTimeouts" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#create ComputeStoragePool#create}. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#delete ComputeStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#update ComputeStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#create ComputeStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#delete ComputeStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_storage_pool#update ComputeStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStoragePoolResourceStatusList <a name="ComputeStoragePoolResourceStatusList" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolResourceStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeStoragePoolResourceStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeStoragePoolResourceStatusOutputReference <a name="ComputeStoragePoolResourceStatusOutputReference" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolResourceStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.diskCount">disk_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp">last_resize_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">max_total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes">pool_used_capacity_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops">pool_used_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput">pool_used_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes">pool_user_written_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb">total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops">total_provisioned_disk_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput">total_provisioned_disk_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus">ComputeStoragePoolResourceStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_count`<sup>Required</sup> <a name="disk_count" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.diskCount"></a>

```python
disk_count: str
```

- *Type:* str

---

##### `last_resize_timestamp`<sup>Required</sup> <a name="last_resize_timestamp" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.lastResizeTimestamp"></a>

```python
last_resize_timestamp: str
```

- *Type:* str

---

##### `max_total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="max_total_provisioned_disk_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```python
max_total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `pool_used_capacity_bytes`<sup>Required</sup> <a name="pool_used_capacity_bytes" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedCapacityBytes"></a>

```python
pool_used_capacity_bytes: str
```

- *Type:* str

---

##### `pool_used_iops`<sup>Required</sup> <a name="pool_used_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedIops"></a>

```python
pool_used_iops: str
```

- *Type:* str

---

##### `pool_used_throughput`<sup>Required</sup> <a name="pool_used_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUsedThroughput"></a>

```python
pool_used_throughput: str
```

- *Type:* str

---

##### `pool_user_written_bytes`<sup>Required</sup> <a name="pool_user_written_bytes" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.poolUserWrittenBytes"></a>

```python
pool_user_written_bytes: str
```

- *Type:* str

---

##### `total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="total_provisioned_disk_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```python
total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `total_provisioned_disk_iops`<sup>Required</sup> <a name="total_provisioned_disk_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskIops"></a>

```python
total_provisioned_disk_iops: str
```

- *Type:* str

---

##### `total_provisioned_disk_throughput`<sup>Required</sup> <a name="total_provisioned_disk_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```python
total_provisioned_disk_throughput: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatusOutputReference.property.internalValue"></a>

```python
internal_value: ComputeStoragePoolResourceStatus
```

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolResourceStatus">ComputeStoragePoolResourceStatus</a>

---


### ComputeStoragePoolStatusList <a name="ComputeStoragePoolStatusList" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeStoragePoolStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ComputeStoragePoolStatusOutputReference <a name="ComputeStoragePoolStatusOutputReference" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.diskCount">disk_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp">last_resize_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb">max_total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes">pool_used_capacity_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedIops">pool_used_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedThroughput">pool_used_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes">pool_user_written_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb">total_provisioned_disk_capacity_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops">total_provisioned_disk_iops</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput">total_provisioned_disk_throughput</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatus">ComputeStoragePoolStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disk_count`<sup>Required</sup> <a name="disk_count" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.diskCount"></a>

```python
disk_count: str
```

- *Type:* str

---

##### `last_resize_timestamp`<sup>Required</sup> <a name="last_resize_timestamp" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.lastResizeTimestamp"></a>

```python
last_resize_timestamp: str
```

- *Type:* str

---

##### `max_total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="max_total_provisioned_disk_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.maxTotalProvisionedDiskCapacityGb"></a>

```python
max_total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `pool_used_capacity_bytes`<sup>Required</sup> <a name="pool_used_capacity_bytes" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedCapacityBytes"></a>

```python
pool_used_capacity_bytes: str
```

- *Type:* str

---

##### `pool_used_iops`<sup>Required</sup> <a name="pool_used_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedIops"></a>

```python
pool_used_iops: str
```

- *Type:* str

---

##### `pool_used_throughput`<sup>Required</sup> <a name="pool_used_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUsedThroughput"></a>

```python
pool_used_throughput: str
```

- *Type:* str

---

##### `pool_user_written_bytes`<sup>Required</sup> <a name="pool_user_written_bytes" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.poolUserWrittenBytes"></a>

```python
pool_user_written_bytes: str
```

- *Type:* str

---

##### `total_provisioned_disk_capacity_gb`<sup>Required</sup> <a name="total_provisioned_disk_capacity_gb" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskCapacityGb"></a>

```python
total_provisioned_disk_capacity_gb: str
```

- *Type:* str

---

##### `total_provisioned_disk_iops`<sup>Required</sup> <a name="total_provisioned_disk_iops" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskIops"></a>

```python
total_provisioned_disk_iops: str
```

- *Type:* str

---

##### `total_provisioned_disk_throughput`<sup>Required</sup> <a name="total_provisioned_disk_throughput" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.totalProvisionedDiskThroughput"></a>

```python
total_provisioned_disk_throughput: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatusOutputReference.property.internalValue"></a>

```python
internal_value: ComputeStoragePoolStatus
```

- *Type:* <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolStatus">ComputeStoragePoolStatus</a>

---


### ComputeStoragePoolTimeoutsOutputReference <a name="ComputeStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_storage_pool

computeStoragePool.ComputeStoragePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeStoragePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeStoragePool.ComputeStoragePoolTimeouts">ComputeStoragePoolTimeouts</a>]

---



