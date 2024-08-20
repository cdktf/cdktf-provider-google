# `netappStoragePool` Submodule <a name="`netappStoragePool` Submodule" id="@cdktf/provider-google.netappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappStoragePool <a name="NetappStoragePool" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_gib: str,
  location: str,
  name: str,
  network: str,
  service_level: str,
  active_directory: str = None,
  description: str = None,
  id: str = None,
  kms_config: str = None,
  labels: typing.Mapping[str] = None,
  ldap_enabled: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: NetappStoragePoolTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.capacityGib">capacity_gib</a></code> | <code>str</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.location">location</a></code> | <code>str</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.network">network</a></code> | <code>str</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.serviceLevel">service_level</a></code> | <code>str</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.activeDirectory">active_directory</a></code> | <code>str</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.kmsConfig">kms_config</a></code> | <code>str</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.ldapEnabled">ldap_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.capacityGib"></a>

- *Type:* str

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.location"></a>

- *Type:* str

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.network"></a>

- *Type:* str

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.serviceLevel"></a>

- *Type:* str

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.activeDirectory"></a>

- *Type:* str

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_config`<sup>Optional</sup> <a name="kms_config" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.kmsConfig"></a>

- *Type:* str

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `ldap_enabled`<sup>Optional</sup> <a name="ldap_enabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.ldapEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig">reset_kms_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled">reset_ldap_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_config` <a name="reset_kms_config" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig"></a>

```python
def reset_kms_config() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_ldap_enabled` <a name="reset_ldap_enabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled"></a>

```python
def reset_ldap_enabled() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappStoragePool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType">encryption_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib">volume_capacity_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount">volume_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput">active_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput">capacity_gib_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput">kms_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput">ldap_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput">service_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory">active_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib">capacity_gib</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig">kms_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled">ldap_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel">service_level</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `encryption_type`<sup>Required</sup> <a name="encryption_type" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType"></a>

```python
encryption_type: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeouts"></a>

```python
timeouts: NetappStoragePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a>

---

##### `volume_capacity_gib`<sup>Required</sup> <a name="volume_capacity_gib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib"></a>

```python
volume_capacity_gib: str
```

- *Type:* str

---

##### `volume_count`<sup>Required</sup> <a name="volume_count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount"></a>

```python
volume_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput"></a>

```python
active_directory_input: str
```

- *Type:* str

---

##### `capacity_gib_input`<sup>Optional</sup> <a name="capacity_gib_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput"></a>

```python
capacity_gib_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_config_input`<sup>Optional</sup> <a name="kms_config_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput"></a>

```python
kms_config_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ldap_enabled_input`<sup>Optional</sup> <a name="ldap_enabled_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput"></a>

```python
ldap_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_level_input`<sup>Optional</sup> <a name="service_level_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput"></a>

```python
service_level_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappStoragePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>]

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory"></a>

```python
active_directory: str
```

- *Type:* str

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_config`<sup>Required</sup> <a name="kms_config" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig"></a>

```python
kms_config: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `ldap_enabled`<sup>Required</sup> <a name="ldap_enabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled"></a>

```python
ldap_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappStoragePoolConfig <a name="NetappStoragePoolConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  capacity_gib: str,
  location: str,
  name: str,
  network: str,
  service_level: str,
  active_directory: str = None,
  description: str = None,
  id: str = None,
  kms_config: str = None,
  labels: typing.Mapping[str] = None,
  ldap_enabled: typing.Union[bool, IResolvable] = None,
  project: str = None,
  timeouts: NetappStoragePoolTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib">capacity_gib</a></code> | <code>str</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location">location</a></code> | <code>str</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name">name</a></code> | <code>str</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network">network</a></code> | <code>str</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel">service_level</a></code> | <code>str</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory">active_directory</a></code> | <code>str</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig">kms_config</a></code> | <code>str</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled">ldap_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `capacity_gib`<sup>Required</sup> <a name="capacity_gib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib"></a>

```python
capacity_gib: str
```

- *Type:* str

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network"></a>

```python
network: str
```

- *Type:* str

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `service_level`<sup>Required</sup> <a name="service_level" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel"></a>

```python
service_level: str
```

- *Type:* str

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory"></a>

```python
active_directory: str
```

- *Type:* str

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_config`<sup>Optional</sup> <a name="kms_config" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig"></a>

```python
kms_config: str
```

- *Type:* str

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `ldap_enabled`<sup>Optional</sup> <a name="ldap_enabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled"></a>

```python
ldap_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts"></a>

```python
timeouts: NetappStoragePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

### NetappStoragePoolTimeouts <a name="NetappStoragePoolTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePoolTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.42.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappStoragePoolTimeoutsOutputReference <a name="NetappStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_storage_pool

netappStoragePool.NetappStoragePoolTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappStoragePoolTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>]

---



