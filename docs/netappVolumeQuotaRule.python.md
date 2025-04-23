# `netappVolumeQuotaRule` Submodule <a name="`netappVolumeQuotaRule` Submodule" id="@cdktf/provider-google.netappVolumeQuotaRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappVolumeQuotaRule <a name="NetappVolumeQuotaRule" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule google_netapp_volume_quota_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_limit_mib: typing.Union[int, float],
  name: str,
  type: str,
  volume_name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  target: str = None,
  timeouts: NetappVolumeQuotaRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.diskLimitMib">disk_limit_mib</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.type">type</a></code> | <code>str</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.volumeName">volume_name</a></code> | <code>str</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Description for the quota rule. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.location">location</a></code> | <code>str</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#project NetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.target">target</a></code> | <code>str</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_limit_mib`<sup>Required</sup> <a name="disk_limit_mib" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.diskLimitMib"></a>

- *Type:* typing.Union[int, float]

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#disk_limit_mib NetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#name NetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.type"></a>

- *Type:* str

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#type NetappVolumeQuotaRule#type}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.volumeName"></a>

- *Type:* str

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#volume_name NetappVolumeQuotaRule#volume_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.description"></a>

- *Type:* str

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#description NetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#labels NetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.location"></a>

- *Type:* str

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#location NetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#project NetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.target"></a>

- *Type:* str

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#target NetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#timeouts NetappVolumeQuotaRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTarget">reset_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_target` <a name="reset_target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTarget"></a>

```python
def reset_target() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetappVolumeQuotaRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappVolumeQuotaRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappVolumeQuotaRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetappVolumeQuotaRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.stateDetails">state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference">NetappVolumeQuotaRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMibInput">disk_limit_mib_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.targetInput">target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMib">disk_limit_mib</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_details`<sup>Required</sup> <a name="state_details" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.stateDetails"></a>

```python
state_details: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeouts"></a>

```python
timeouts: NetappVolumeQuotaRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference">NetappVolumeQuotaRuleTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disk_limit_mib_input`<sup>Optional</sup> <a name="disk_limit_mib_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMibInput"></a>

```python
disk_limit_mib_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.targetInput"></a>

```python
target_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetappVolumeQuotaRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disk_limit_mib`<sup>Required</sup> <a name="disk_limit_mib" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.diskLimitMib"></a>

```python
disk_limit_mib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappVolumeQuotaRuleConfig <a name="NetappVolumeQuotaRuleConfig" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  disk_limit_mib: typing.Union[int, float],
  name: str,
  type: str,
  volume_name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  target: str = None,
  timeouts: NetappVolumeQuotaRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.diskLimitMib">disk_limit_mib</a></code> | <code>typing.Union[int, float]</code> | The maximum allowed capacity in MiB. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.name">name</a></code> | <code>str</code> | The resource name of the quotaRule. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.type">type</a></code> | <code>str</code> | Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"]. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.volumeName">volume_name</a></code> | <code>str</code> | Name of the volume to create the quotaRule in. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.description">description</a></code> | <code>str</code> | Description for the quota rule. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.location">location</a></code> | <code>str</code> | Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#project NetappVolumeQuotaRule#project}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.target">target</a></code> | <code>str</code> | The quota rule applies to the specified user or group. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `disk_limit_mib`<sup>Required</sup> <a name="disk_limit_mib" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.diskLimitMib"></a>

```python
disk_limit_mib: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum allowed capacity in MiB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#disk_limit_mib NetappVolumeQuotaRule#disk_limit_mib}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the quotaRule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#name NetappVolumeQuotaRule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Types of Quota Rule. Possible values: ["INDIVIDUAL_USER_QUOTA", "INDIVIDUAL_GROUP_QUOTA", "DEFAULT_USER_QUOTA", "DEFAULT_GROUP_QUOTA"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#type NetappVolumeQuotaRule#type}

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

Name of the volume to create the quotaRule in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#volume_name NetappVolumeQuotaRule#volume_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description for the quota rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#description NetappVolumeQuotaRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#id NetappVolumeQuotaRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs of the quota rule. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#labels NetappVolumeQuotaRule#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Loction of the quotaRule. QuotaRules are child resources of volumes and live in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#location NetappVolumeQuotaRule#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#project NetappVolumeQuotaRule#project}.

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.target"></a>

```python
target: str
```

- *Type:* str

The quota rule applies to the specified user or group.

Valid targets for volumes with NFS protocol enabled:

* UNIX UID for individual user quota
* UNIX GID for individual group quota
  Valid targets for volumes with SMB protocol enabled:
* Windows SID for individual user quota
  Leave empty for default quotas

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#target NetappVolumeQuotaRule#target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleConfig.property.timeouts"></a>

```python
timeouts: NetappVolumeQuotaRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#timeouts NetappVolumeQuotaRule#timeouts}

---

### NetappVolumeQuotaRuleTimeouts <a name="NetappVolumeQuotaRuleTimeouts" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#create NetappVolumeQuotaRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#delete NetappVolumeQuotaRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/netapp_volume_quota_rule#update NetappVolumeQuotaRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappVolumeQuotaRuleTimeoutsOutputReference <a name="NetappVolumeQuotaRuleTimeoutsOutputReference" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import netapp_volume_quota_rule

netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetappVolumeQuotaRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.netappVolumeQuotaRule.NetappVolumeQuotaRuleTimeouts">NetappVolumeQuotaRuleTimeouts</a>]

---



