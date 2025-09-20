# `modelArmorFloorsetting` Submodule <a name="`modelArmorFloorsetting` Submodule" id="@cdktf/provider-google.modelArmorFloorsetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelArmorFloorsetting <a name="ModelArmorFloorsetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting google_model_armor_floorsetting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: ModelArmorFloorsettingFilterConfig,
  location: str,
  parent: str,
  ai_platform_floor_setting: ModelArmorFloorsettingAiPlatformFloorSetting = None,
  enable_floor_setting_enforcement: typing.Union[bool, IResolvable] = None,
  floor_setting_metadata: ModelArmorFloorsettingFloorSettingMetadata = None,
  id: str = None,
  integrated_services: typing.List[str] = None,
  timeouts: ModelArmorFloorsettingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting">ai_platform_floor_setting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement">enable_floor_setting_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata">floor_setting_metadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.integratedServices">integrated_services</a></code> | <code>typing.List[str]</code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.filterConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_config ModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#location ModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.parent"></a>

- *Type:* str

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#parent ModelArmorFloorsetting#parent}

---

##### `ai_platform_floor_setting`<sup>Optional</sup> <a name="ai_platform_floor_setting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.aiPlatformFloorSetting"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#ai_platform_floor_setting ModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enable_floor_setting_enforcement`<sup>Optional</sup> <a name="enable_floor_setting_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.enableFloorSettingEnforcement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_floor_setting_enforcement ModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floor_setting_metadata`<sup>Optional</sup> <a name="floor_setting_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.floorSettingMetadata"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#floor_setting_metadata ModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrated_services`<sup>Optional</sup> <a name="integrated_services" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.integratedServices"></a>

- *Type:* typing.List[str]

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#integrated_services ModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#timeouts ModelArmorFloorsetting#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting">put_ai_platform_floor_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig">put_filter_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata">put_floor_setting_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetAiPlatformFloorSetting">reset_ai_platform_floor_setting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetEnableFloorSettingEnforcement">reset_enable_floor_setting_enforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetFloorSettingMetadata">reset_floor_setting_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetIntegratedServices">reset_integrated_services</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ai_platform_floor_setting` <a name="put_ai_platform_floor_setting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting"></a>

```python
def put_ai_platform_floor_setting(
  enable_cloud_logging: typing.Union[bool, IResolvable] = None,
  inspect_and_block: typing.Union[bool, IResolvable] = None,
  inspect_only: typing.Union[bool, IResolvable] = None
) -> None
```

###### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.enableCloudLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_cloud_logging ModelArmorFloorsetting#enable_cloud_logging}

---

###### `inspect_and_block`<sup>Optional</sup> <a name="inspect_and_block" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.inspectAndBlock"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_and_block ModelArmorFloorsetting#inspect_and_block}

---

###### `inspect_only`<sup>Optional</sup> <a name="inspect_only" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putAiPlatformFloorSetting.parameter.inspectOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_only ModelArmorFloorsetting#inspect_only}

---

##### `put_filter_config` <a name="put_filter_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig"></a>

```python
def put_filter_config(
  malicious_uri_filter_settings: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: ModelArmorFloorsettingFilterConfigRaiSettings = None,
  sdp_settings: ModelArmorFloorsettingFilterConfigSdpSettings = None
) -> None
```

###### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig.parameter.maliciousUriFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#malicious_uri_filter_settings ModelArmorFloorsetting#malicious_uri_filter_settings}

---

###### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig.parameter.piAndJailbreakFilterSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#pi_and_jailbreak_filter_settings ModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

###### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig.parameter.raiSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#rai_settings ModelArmorFloorsetting#rai_settings}

---

###### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFilterConfig.parameter.sdpSettings"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#sdp_settings ModelArmorFloorsetting#sdp_settings}

---

##### `put_floor_setting_metadata` <a name="put_floor_setting_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata"></a>

```python
def put_floor_setting_metadata(
  multi_language_detection: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection = None
) -> None
```

###### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putFloorSettingMetadata.parameter.multiLanguageDetection"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#multi_language_detection ModelArmorFloorsetting#multi_language_detection}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}.

---

##### `reset_ai_platform_floor_setting` <a name="reset_ai_platform_floor_setting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetAiPlatformFloorSetting"></a>

```python
def reset_ai_platform_floor_setting() -> None
```

##### `reset_enable_floor_setting_enforcement` <a name="reset_enable_floor_setting_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetEnableFloorSettingEnforcement"></a>

```python
def reset_enable_floor_setting_enforcement() -> None
```

##### `reset_floor_setting_metadata` <a name="reset_floor_setting_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetFloorSettingMetadata"></a>

```python
def reset_floor_setting_metadata() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_integrated_services` <a name="reset_integrated_services" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetIntegratedServices"></a>

```python
def reset_integrated_services() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsetting.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ModelArmorFloorsetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ModelArmorFloorsetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ModelArmorFloorsetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ModelArmorFloorsetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSetting">ai_platform_floor_setting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference">ModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference">ModelArmorFloorsettingFilterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadata">floor_setting_metadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference">ModelArmorFloorsettingFloorSettingMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference">ModelArmorFloorsettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSettingInput">ai_platform_floor_setting_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcementInput">enable_floor_setting_enforcement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfigInput">filter_config_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadataInput">floor_setting_metadata_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServicesInput">integrated_services_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcement">enable_floor_setting_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServices">integrated_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ai_platform_floor_setting`<sup>Required</sup> <a name="ai_platform_floor_setting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSetting"></a>

```python
ai_platform_floor_setting: ModelArmorFloorsettingAiPlatformFloorSettingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference">ModelArmorFloorsettingAiPlatformFloorSettingOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfig"></a>

```python
filter_config: ModelArmorFloorsettingFilterConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference">ModelArmorFloorsettingFilterConfigOutputReference</a>

---

##### `floor_setting_metadata`<sup>Required</sup> <a name="floor_setting_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadata"></a>

```python
floor_setting_metadata: ModelArmorFloorsettingFloorSettingMetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference">ModelArmorFloorsettingFloorSettingMetadataOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeouts"></a>

```python
timeouts: ModelArmorFloorsettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference">ModelArmorFloorsettingTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `ai_platform_floor_setting_input`<sup>Optional</sup> <a name="ai_platform_floor_setting_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.aiPlatformFloorSettingInput"></a>

```python
ai_platform_floor_setting_input: ModelArmorFloorsettingAiPlatformFloorSetting
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---

##### `enable_floor_setting_enforcement_input`<sup>Optional</sup> <a name="enable_floor_setting_enforcement_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcementInput"></a>

```python
enable_floor_setting_enforcement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_config_input`<sup>Optional</sup> <a name="filter_config_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.filterConfigInput"></a>

```python
filter_config_input: ModelArmorFloorsettingFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---

##### `floor_setting_metadata_input`<sup>Optional</sup> <a name="floor_setting_metadata_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.floorSettingMetadataInput"></a>

```python
floor_setting_metadata_input: ModelArmorFloorsettingFloorSettingMetadata
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `integrated_services_input`<sup>Optional</sup> <a name="integrated_services_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServicesInput"></a>

```python
integrated_services_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ModelArmorFloorsettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>]

---

##### `enable_floor_setting_enforcement`<sup>Required</sup> <a name="enable_floor_setting_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.enableFloorSettingEnforcement"></a>

```python
enable_floor_setting_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `integrated_services`<sup>Required</sup> <a name="integrated_services" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.integratedServices"></a>

```python
integrated_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ModelArmorFloorsettingAiPlatformFloorSetting <a name="ModelArmorFloorsettingAiPlatformFloorSetting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting(
  enable_cloud_logging: typing.Union[bool, IResolvable] = None,
  inspect_and_block: typing.Union[bool, IResolvable] = None,
  inspect_only: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, log Model Armor filter results to Cloud Logging. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock">inspect_and_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Model Armor filters will be run in inspect and block mode. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly">inspect_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request. |

---

##### `enable_cloud_logging`<sup>Optional</sup> <a name="enable_cloud_logging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.enableCloudLogging"></a>

```python
enable_cloud_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, log Model Armor filter results to Cloud Logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_cloud_logging ModelArmorFloorsetting#enable_cloud_logging}

---

##### `inspect_and_block`<sup>Optional</sup> <a name="inspect_and_block" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectAndBlock"></a>

```python
inspect_and_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect and block mode.

Requests that trip Model Armor filters will be blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_and_block ModelArmorFloorsetting#inspect_and_block}

---

##### `inspect_only`<sup>Optional</sup> <a name="inspect_only" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting.property.inspectOnly"></a>

```python
inspect_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Model Armor filters will be run in inspect only mode. No action will be taken on the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_only ModelArmorFloorsetting#inspect_only}

---

### ModelArmorFloorsettingConfig <a name="ModelArmorFloorsettingConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter_config: ModelArmorFloorsettingFilterConfig,
  location: str,
  parent: str,
  ai_platform_floor_setting: ModelArmorFloorsettingAiPlatformFloorSetting = None,
  enable_floor_setting_enforcement: typing.Union[bool, IResolvable] = None,
  floor_setting_metadata: ModelArmorFloorsettingFloorSettingMetadata = None,
  id: str = None,
  integrated_services: typing.List[str] = None,
  timeouts: ModelArmorFloorsettingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.filterConfig">filter_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | filter_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.parent">parent</a></code> | <code>str</code> | Will be any one of these:. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.aiPlatformFloorSetting">ai_platform_floor_setting</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | ai_platform_floor_setting block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement">enable_floor_setting_enforcement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Floor Settings enforcement status. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.floorSettingMetadata">floor_setting_metadata</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | floor_setting_metadata block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.integratedServices">integrated_services</a></code> | <code>typing.List[str]</code> | List of integrated services for which the floor setting is applicable. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter_config`<sup>Required</sup> <a name="filter_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.filterConfig"></a>

```python
filter_config: ModelArmorFloorsettingFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

filter_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_config ModelArmorFloorsetting#filter_config}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#location ModelArmorFloorsetting#location}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Will be any one of these:.

* 'projects/{project}'
* 'folders/{folder}'
* 'organizations/{organizationId}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#parent ModelArmorFloorsetting#parent}

---

##### `ai_platform_floor_setting`<sup>Optional</sup> <a name="ai_platform_floor_setting" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.aiPlatformFloorSetting"></a>

```python
ai_platform_floor_setting: ModelArmorFloorsettingAiPlatformFloorSetting
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

ai_platform_floor_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#ai_platform_floor_setting ModelArmorFloorsetting#ai_platform_floor_setting}

---

##### `enable_floor_setting_enforcement`<sup>Optional</sup> <a name="enable_floor_setting_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.enableFloorSettingEnforcement"></a>

```python
enable_floor_setting_enforcement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Floor Settings enforcement status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_floor_setting_enforcement ModelArmorFloorsetting#enable_floor_setting_enforcement}

---

##### `floor_setting_metadata`<sup>Optional</sup> <a name="floor_setting_metadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.floorSettingMetadata"></a>

```python
floor_setting_metadata: ModelArmorFloorsettingFloorSettingMetadata
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

floor_setting_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#floor_setting_metadata ModelArmorFloorsetting#floor_setting_metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#id ModelArmorFloorsetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `integrated_services`<sup>Optional</sup> <a name="integrated_services" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.integratedServices"></a>

```python
integrated_services: typing.List[str]
```

- *Type:* typing.List[str]

List of integrated services for which the floor setting is applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#integrated_services ModelArmorFloorsetting#integrated_services}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingConfig.property.timeouts"></a>

```python
timeouts: ModelArmorFloorsettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#timeouts ModelArmorFloorsetting#timeouts}

---

### ModelArmorFloorsettingFilterConfig <a name="ModelArmorFloorsettingFilterConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig(
  malicious_uri_filter_settings: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings = None,
  pi_and_jailbreak_filter_settings: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings = None,
  rai_settings: ModelArmorFloorsettingFilterConfigRaiSettings = None,
  sdp_settings: ModelArmorFloorsettingFilterConfigSdpSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | malicious_uri_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | pi_and_jailbreak_filter_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | rai_settings block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | sdp_settings block. |

---

##### `malicious_uri_filter_settings`<sup>Optional</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

malicious_uri_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#malicious_uri_filter_settings ModelArmorFloorsetting#malicious_uri_filter_settings}

---

##### `pi_and_jailbreak_filter_settings`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

pi_and_jailbreak_filter_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#pi_and_jailbreak_filter_settings ModelArmorFloorsetting#pi_and_jailbreak_filter_settings}

---

##### `rai_settings`<sup>Optional</sup> <a name="rai_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.raiSettings"></a>

```python
rai_settings: ModelArmorFloorsettingFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

rai_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#rai_settings ModelArmorFloorsetting#rai_settings}

---

##### `sdp_settings`<sup>Optional</sup> <a name="sdp_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig.property.sdpSettings"></a>

```python
sdp_settings: ModelArmorFloorsettingFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

sdp_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#sdp_settings ModelArmorFloorsetting#sdp_settings}

---

### ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings <a name="ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings <a name="ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings(
  confidence_level: str = None,
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFilterConfigRaiSettings <a name="ModelArmorFloorsettingFilterConfigRaiSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings(
  rai_filters: typing.Union[IResolvable, typing.List[ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters">rai_filters</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]</code> | rai_filters block. |

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings.property.raiFilters"></a>

```python
rai_filters: typing.Union[IResolvable, typing.List[ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#rai_filters ModelArmorFloorsetting#rai_filters}

---

### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters(
  filter_type: str,
  confidence_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType">filter_type</a></code> | <code>str</code> | Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH. |

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

Possible values: SEXUALLY_EXPLICIT HATE_SPEECH HARASSMENT DANGEROUS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_type ModelArmorFloorsetting#filter_type}

---

##### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

### ModelArmorFloorsettingFilterConfigSdpSettings <a name="ModelArmorFloorsettingFilterConfigSdpSettings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings(
  advanced_config: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | advanced_config block. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | basic_config block. |

---

##### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.advancedConfig"></a>

```python
advanced_config: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#advanced_config ModelArmorFloorsetting#advanced_config}

---

##### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings.property.basicConfig"></a>

```python
basic_config: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#basic_config ModelArmorFloorsetting#basic_config}

---

### ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig <a name="ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig(
  deidentify_template: str = None,
  inspect_template: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | Optional Sensitive Data Protection Deidentify template resource name. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | Sensitive Data Protection inspect template resource name. |

---

##### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#deidentify_template ModelArmorFloorsetting#deidentify_template}

---

##### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_template ModelArmorFloorsetting#inspect_template}

---

### ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig <a name="ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig(
  filter_enforcement: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED. |

---

##### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

### ModelArmorFloorsettingFloorSettingMetadata <a name="ModelArmorFloorsettingFloorSettingMetadata" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata(
  multi_language_detection: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | multi_language_detection block. |

---

##### `multi_language_detection`<sup>Optional</sup> <a name="multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata.property.multiLanguageDetection"></a>

```python
multi_language_detection: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

multi_language_detection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#multi_language_detection ModelArmorFloorsetting#multi_language_detection}

---

### ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection <a name="ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, multi language detection will be enabled. |

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_multi_language_detection ModelArmorFloorsetting#enable_multi_language_detection}

---

### ModelArmorFloorsettingTimeouts <a name="ModelArmorFloorsettingTimeouts" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#create ModelArmorFloorsetting#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#delete ModelArmorFloorsetting#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#update ModelArmorFloorsetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelArmorFloorsettingAiPlatformFloorSettingOutputReference <a name="ModelArmorFloorsettingAiPlatformFloorSettingOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging">reset_enable_cloud_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock">reset_inspect_and_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly">reset_inspect_only</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enable_cloud_logging` <a name="reset_enable_cloud_logging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetEnableCloudLogging"></a>

```python
def reset_enable_cloud_logging() -> None
```

##### `reset_inspect_and_block` <a name="reset_inspect_and_block" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectAndBlock"></a>

```python
def reset_inspect_and_block() -> None
```

##### `reset_inspect_only` <a name="reset_inspect_only" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.resetInspectOnly"></a>

```python
def reset_inspect_only() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput">enable_cloud_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput">inspect_and_block_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput">inspect_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging">enable_cloud_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock">inspect_and_block</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly">inspect_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_cloud_logging_input`<sup>Optional</sup> <a name="enable_cloud_logging_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLoggingInput"></a>

```python
enable_cloud_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_and_block_input`<sup>Optional</sup> <a name="inspect_and_block_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlockInput"></a>

```python
inspect_and_block_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_only_input`<sup>Optional</sup> <a name="inspect_only_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnlyInput"></a>

```python
inspect_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cloud_logging`<sup>Required</sup> <a name="enable_cloud_logging" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.enableCloudLogging"></a>

```python
enable_cloud_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_and_block`<sup>Required</sup> <a name="inspect_and_block" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectAndBlock"></a>

```python
inspect_and_block: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `inspect_only`<sup>Required</sup> <a name="inspect_only" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.inspectOnly"></a>

```python
inspect_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSettingOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingAiPlatformFloorSetting
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingAiPlatformFloorSetting">ModelArmorFloorsettingAiPlatformFloorSetting</a>

---


### ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---


### ModelArmorFloorsettingFilterConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings">put_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings">put_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings">put_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings">put_sdp_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings">reset_malicious_uri_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings">reset_pi_and_jailbreak_filter_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings">reset_rai_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings">reset_sdp_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_malicious_uri_filter_settings` <a name="put_malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings"></a>

```python
def put_malicious_uri_filter_settings(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putMaliciousUriFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Malicious URI filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

##### `put_pi_and_jailbreak_filter_settings` <a name="put_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings"></a>

```python
def put_pi_and_jailbreak_filter_settings(
  confidence_level: str = None,
  filter_enforcement: str = None
) -> None
```

###### `confidence_level`<sup>Optional</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.confidenceLevel"></a>

- *Type:* str

Possible values: LOW_AND_ABOVE MEDIUM_AND_ABOVE HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#confidence_level ModelArmorFloorsetting#confidence_level}

---

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putPiAndJailbreakFilterSettings.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether Prompt injection and Jailbreak filter is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

##### `put_rai_settings` <a name="put_rai_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings"></a>

```python
def put_rai_settings(
  rai_filters: typing.Union[IResolvable, typing.List[ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putRaiSettings.parameter.raiFilters"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

rai_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#rai_filters ModelArmorFloorsetting#rai_filters}

---

##### `put_sdp_settings` <a name="put_sdp_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings"></a>

```python
def put_sdp_settings(
  advanced_config: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig = None,
  basic_config: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig = None
) -> None
```

###### `advanced_config`<sup>Optional</sup> <a name="advanced_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.advancedConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

advanced_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#advanced_config ModelArmorFloorsetting#advanced_config}

---

###### `basic_config`<sup>Optional</sup> <a name="basic_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.putSdpSettings.parameter.basicConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

basic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#basic_config ModelArmorFloorsetting#basic_config}

---

##### `reset_malicious_uri_filter_settings` <a name="reset_malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetMaliciousUriFilterSettings"></a>

```python
def reset_malicious_uri_filter_settings() -> None
```

##### `reset_pi_and_jailbreak_filter_settings` <a name="reset_pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetPiAndJailbreakFilterSettings"></a>

```python
def reset_pi_and_jailbreak_filter_settings() -> None
```

##### `reset_rai_settings` <a name="reset_rai_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetRaiSettings"></a>

```python
def reset_rai_settings() -> None
```

##### `reset_sdp_settings` <a name="reset_sdp_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.resetSdpSettings"></a>

```python
def reset_sdp_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings">malicious_uri_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings">pi_and_jailbreak_filter_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings">rai_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings">sdp_settings</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput">malicious_uri_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput">pi_and_jailbreak_filter_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput">rai_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput">sdp_settings_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `malicious_uri_filter_settings`<sup>Required</sup> <a name="malicious_uri_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettings"></a>

```python
malicious_uri_filter_settings: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettingsOutputReference</a>

---

##### `pi_and_jailbreak_filter_settings`<sup>Required</sup> <a name="pi_and_jailbreak_filter_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettings"></a>

```python
pi_and_jailbreak_filter_settings: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference</a>

---

##### `rai_settings`<sup>Required</sup> <a name="rai_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettings"></a>

```python
rai_settings: ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference">ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference</a>

---

##### `sdp_settings`<sup>Required</sup> <a name="sdp_settings" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettings"></a>

```python
sdp_settings: ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference</a>

---

##### `malicious_uri_filter_settings_input`<sup>Optional</sup> <a name="malicious_uri_filter_settings_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.maliciousUriFilterSettingsInput"></a>

```python
malicious_uri_filter_settings_input: ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings">ModelArmorFloorsettingFilterConfigMaliciousUriFilterSettings</a>

---

##### `pi_and_jailbreak_filter_settings_input`<sup>Optional</sup> <a name="pi_and_jailbreak_filter_settings_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.piAndJailbreakFilterSettingsInput"></a>

```python
pi_and_jailbreak_filter_settings_input: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---

##### `rai_settings_input`<sup>Optional</sup> <a name="rai_settings_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.raiSettingsInput"></a>

```python
rai_settings_input: ModelArmorFloorsettingFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---

##### `sdp_settings_input`<sup>Optional</sup> <a name="sdp_settings_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.sdpSettingsInput"></a>

```python
sdp_settings_input: ModelArmorFloorsettingFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfig">ModelArmorFloorsettingFilterConfig</a>

---


### ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings">ModelArmorFloorsettingFilterConfigPiAndJailbreakFilterSettings</a>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters">put_rai_filters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rai_filters` <a name="put_rai_filters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters"></a>

```python
def put_rai_filters(
  value: typing.Union[IResolvable, typing.List[ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.putRaiFilters.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters">rai_filters</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput">rai_filters_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rai_filters`<sup>Required</sup> <a name="rai_filters" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFilters"></a>

```python
rai_filters: ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList</a>

---

##### `rai_filters_input`<sup>Optional</sup> <a name="rai_filters_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.raiFiltersInput"></a>

```python
rai_filters_input: typing.Union[IResolvable, typing.List[ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfigRaiSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettings">ModelArmorFloorsettingFilterConfigRaiSettings</a>

---


### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]]

---


### ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference <a name="ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel">reset_confidence_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_confidence_level` <a name="reset_confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.resetConfidenceLevel"></a>

```python
def reset_confidence_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput">confidence_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput">filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level_input`<sup>Optional</sup> <a name="confidence_level_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevelInput"></a>

```python
confidence_level_input: str
```

- *Type:* str

---

##### `filter_type_input`<sup>Optional</sup> <a name="filter_type_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterTypeInput"></a>

```python
filter_type_input: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFiltersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters">ModelArmorFloorsettingFilterConfigRaiSettingsRaiFilters</a>]

---


### ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate">reset_deidentify_template</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate">reset_inspect_template</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_deidentify_template` <a name="reset_deidentify_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetDeidentifyTemplate"></a>

```python
def reset_deidentify_template() -> None
```

##### `reset_inspect_template` <a name="reset_inspect_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.resetInspectTemplate"></a>

```python
def reset_inspect_template() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput">deidentify_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput">inspect_template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate">deidentify_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate">inspect_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deidentify_template_input`<sup>Optional</sup> <a name="deidentify_template_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplateInput"></a>

```python
deidentify_template_input: str
```

- *Type:* str

---

##### `inspect_template_input`<sup>Optional</sup> <a name="inspect_template_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplateInput"></a>

```python
inspect_template_input: str
```

- *Type:* str

---

##### `deidentify_template`<sup>Required</sup> <a name="deidentify_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.deidentifyTemplate"></a>

```python
deidentify_template: str
```

- *Type:* str

---

##### `inspect_template`<sup>Required</sup> <a name="inspect_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.inspectTemplate"></a>

```python
inspect_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement">reset_filter_enforcement</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_filter_enforcement` <a name="reset_filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.resetFilterEnforcement"></a>

```python
def reset_filter_enforcement() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput">filter_enforcement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement">filter_enforcement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_enforcement_input`<sup>Optional</sup> <a name="filter_enforcement_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcementInput"></a>

```python
filter_enforcement_input: str
```

- *Type:* str

---

##### `filter_enforcement`<sup>Required</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.filterEnforcement"></a>

```python
filter_enforcement: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---


### ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference <a name="ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig">put_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig">put_basic_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig">reset_advanced_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig">reset_basic_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_advanced_config` <a name="put_advanced_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig"></a>

```python
def put_advanced_config(
  deidentify_template: str = None,
  inspect_template: str = None
) -> None
```

###### `deidentify_template`<sup>Optional</sup> <a name="deidentify_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.deidentifyTemplate"></a>

- *Type:* str

Optional Sensitive Data Protection Deidentify template resource name.

If provided then DeidentifyContent action is performed during Sanitization
using this template and inspect template. The De-identified data will
be returned in SdpDeidentifyResult.
Note that all info-types present in the deidentify template must be present
in inspect template.

e.g.
'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#deidentify_template ModelArmorFloorsetting#deidentify_template}

---

###### `inspect_template`<sup>Optional</sup> <a name="inspect_template" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putAdvancedConfig.parameter.inspectTemplate"></a>

- *Type:* str

Sensitive Data Protection inspect template resource name.

If only inspect template is provided (de-identify template not provided),
then Sensitive Data Protection InspectContent action is performed during
Sanitization. All Sensitive Data Protection findings identified during
inspection will be returned as SdpFinding in SdpInsepctionResult.

e.g:-
'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#inspect_template ModelArmorFloorsetting#inspect_template}

---

##### `put_basic_config` <a name="put_basic_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig"></a>

```python
def put_basic_config(
  filter_enforcement: str = None
) -> None
```

###### `filter_enforcement`<sup>Optional</sup> <a name="filter_enforcement" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.putBasicConfig.parameter.filterEnforcement"></a>

- *Type:* str

Tells whether the Sensitive Data Protection basic config is enabled or disabled. Possible values: ENABLED DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#filter_enforcement ModelArmorFloorsetting#filter_enforcement}

---

##### `reset_advanced_config` <a name="reset_advanced_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetAdvancedConfig"></a>

```python
def reset_advanced_config() -> None
```

##### `reset_basic_config` <a name="reset_basic_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.resetBasicConfig"></a>

```python
def reset_basic_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig">advanced_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig">basic_config</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput">advanced_config_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput">basic_config_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `advanced_config`<sup>Required</sup> <a name="advanced_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfig"></a>

```python
advanced_config: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfigOutputReference</a>

---

##### `basic_config`<sup>Required</sup> <a name="basic_config" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfig"></a>

```python
basic_config: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfigOutputReference</a>

---

##### `advanced_config_input`<sup>Optional</sup> <a name="advanced_config_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.advancedConfigInput"></a>

```python
advanced_config_input: ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig">ModelArmorFloorsettingFilterConfigSdpSettingsAdvancedConfig</a>

---

##### `basic_config_input`<sup>Optional</sup> <a name="basic_config_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.basicConfigInput"></a>

```python
basic_config_input: ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig">ModelArmorFloorsettingFilterConfigSdpSettingsBasicConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFilterConfigSdpSettings
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFilterConfigSdpSettings">ModelArmorFloorsettingFilterConfigSdpSettings</a>

---


### ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference <a name="ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput">enable_multi_language_detection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection">enable_multi_language_detection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_multi_language_detection_input`<sup>Optional</sup> <a name="enable_multi_language_detection_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetectionInput"></a>

```python
enable_multi_language_detection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.enableMultiLanguageDetection"></a>

```python
enable_multi_language_detection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---


### ModelArmorFloorsettingFloorSettingMetadataOutputReference <a name="ModelArmorFloorsettingFloorSettingMetadataOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection">put_multi_language_detection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection">reset_multi_language_detection</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_multi_language_detection` <a name="put_multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection"></a>

```python
def put_multi_language_detection(
  enable_multi_language_detection: typing.Union[bool, IResolvable]
) -> None
```

###### `enable_multi_language_detection`<sup>Required</sup> <a name="enable_multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.putMultiLanguageDetection.parameter.enableMultiLanguageDetection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, multi language detection will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/model_armor_floorsetting#enable_multi_language_detection ModelArmorFloorsetting#enable_multi_language_detection}

---

##### `reset_multi_language_detection` <a name="reset_multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.resetMultiLanguageDetection"></a>

```python
def reset_multi_language_detection() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection">multi_language_detection</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput">multi_language_detection_input</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `multi_language_detection`<sup>Required</sup> <a name="multi_language_detection" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetection"></a>

```python
multi_language_detection: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetectionOutputReference</a>

---

##### `multi_language_detection_input`<sup>Optional</sup> <a name="multi_language_detection_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.multiLanguageDetectionInput"></a>

```python
multi_language_detection_input: ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection">ModelArmorFloorsettingFloorSettingMetadataMultiLanguageDetection</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadataOutputReference.property.internalValue"></a>

```python
internal_value: ModelArmorFloorsettingFloorSettingMetadata
```

- *Type:* <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingFloorSettingMetadata">ModelArmorFloorsettingFloorSettingMetadata</a>

---


### ModelArmorFloorsettingTimeoutsOutputReference <a name="ModelArmorFloorsettingTimeoutsOutputReference" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import model_armor_floorsetting

modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ModelArmorFloorsettingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.modelArmorFloorsetting.ModelArmorFloorsettingTimeouts">ModelArmorFloorsettingTimeouts</a>]

---



