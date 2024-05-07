# `dataLossPreventionStoredInfoType` Submodule <a name="`dataLossPreventionStoredInfoType` Submodule" id="@cdktf/provider-google.dataLossPreventionStoredInfoType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataLossPreventionStoredInfoType <a name="DataLossPreventionStoredInfoType" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  description: str = None,
  dictionary: DataLossPreventionStoredInfoTypeDictionary = None,
  display_name: str = None,
  id: str = None,
  large_custom_dictionary: DataLossPreventionStoredInfoTypeLargeCustomDictionary = None,
  regex: DataLossPreventionStoredInfoTypeRegex = None,
  stored_info_type_id: str = None,
  timeouts: DataLossPreventionStoredInfoTypeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the info type in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the info type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User set display name of the info type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.largeCustomDictionary">large_custom_dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | large_custom_dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.storedInfoTypeId">stored_info_type_id</a></code> | <code>str</code> | The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the info type in any of the following formats:.

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#parent DataLossPreventionStoredInfoType#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.description"></a>

- *Type:* str

A description of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#description DataLossPreventionStoredInfoType#description}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.dictionary"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#dictionary DataLossPreventionStoredInfoType#dictionary}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.displayName"></a>

- *Type:* str

User set display name of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#display_name DataLossPreventionStoredInfoType#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `large_custom_dictionary`<sup>Optional</sup> <a name="large_custom_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.largeCustomDictionary"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

large_custom_dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#large_custom_dictionary DataLossPreventionStoredInfoType#large_custom_dictionary}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.regex"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

regex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#regex DataLossPreventionStoredInfoType#regex}

---

##### `stored_info_type_id`<sup>Optional</sup> <a name="stored_info_type_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.storedInfoTypeId"></a>

- *Type:* str

The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;

that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#stored_info_type_id DataLossPreventionStoredInfoType#stored_info_type_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#timeouts DataLossPreventionStoredInfoType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary">put_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary">put_large_custom_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex">put_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDictionary">reset_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetLargeCustomDictionary">reset_large_custom_dictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetRegex">reset_regex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetStoredInfoTypeId">reset_stored_info_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dictionary` <a name="put_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary"></a>

```python
def put_dictionary(
  cloud_storage_path: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath = None,
  word_list: DataLossPreventionStoredInfoTypeDictionaryWordListStruct = None
) -> None
```

###### `cloud_storage_path`<sup>Optional</sup> <a name="cloud_storage_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary.parameter.cloudStoragePath"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#cloud_storage_path DataLossPreventionStoredInfoType#cloud_storage_path}

---

###### `word_list`<sup>Optional</sup> <a name="word_list" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putDictionary.parameter.wordList"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

word_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#word_list DataLossPreventionStoredInfoType#word_list}

---

##### `put_large_custom_dictionary` <a name="put_large_custom_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary"></a>

```python
def put_large_custom_dictionary(
  output_path: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath,
  big_query_field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField = None,
  cloud_storage_file_set: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet = None
) -> None
```

###### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.outputPath"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

output_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#output_path DataLossPreventionStoredInfoType#output_path}

---

###### `big_query_field`<sup>Optional</sup> <a name="big_query_field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.bigQueryField"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

big_query_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#big_query_field DataLossPreventionStoredInfoType#big_query_field}

---

###### `cloud_storage_file_set`<sup>Optional</sup> <a name="cloud_storage_file_set" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putLargeCustomDictionary.parameter.cloudStorageFileSet"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

cloud_storage_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#cloud_storage_file_set DataLossPreventionStoredInfoType#cloud_storage_file_set}

---

##### `put_regex` <a name="put_regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex"></a>

```python
def put_regex(
  pattern: str,
  group_indexes: typing.List[typing.Union[int, float]] = None
) -> None
```

###### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex.parameter.pattern"></a>

- *Type:* str

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#pattern DataLossPreventionStoredInfoType#pattern}

---

###### `group_indexes`<sup>Optional</sup> <a name="group_indexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putRegex.parameter.groupIndexes"></a>

- *Type:* typing.List[typing.Union[int, float]]

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#group_indexes DataLossPreventionStoredInfoType#group_indexes}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#create DataLossPreventionStoredInfoType#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#delete DataLossPreventionStoredInfoType#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#update DataLossPreventionStoredInfoType#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dictionary` <a name="reset_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDictionary"></a>

```python
def reset_dictionary() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_large_custom_dictionary` <a name="reset_large_custom_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetLargeCustomDictionary"></a>

```python
def reset_large_custom_dictionary() -> None
```

##### `reset_regex` <a name="reset_regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetRegex"></a>

```python
def reset_regex() -> None
```

##### `reset_stored_info_type_id` <a name="reset_stored_info_type_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetStoredInfoTypeId"></a>

```python
def reset_stored_info_type_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataLossPreventionStoredInfoType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataLossPreventionStoredInfoType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataLossPreventionStoredInfoType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference">DataLossPreventionStoredInfoTypeDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionary">large_custom_dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference">DataLossPreventionStoredInfoTypeRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference">DataLossPreventionStoredInfoTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionaryInput">dictionary_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionaryInput">large_custom_dictionary_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regexInput">regex_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeIdInput">stored_info_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeId">stored_info_type_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionary"></a>

```python
dictionary: DataLossPreventionStoredInfoTypeDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference">DataLossPreventionStoredInfoTypeDictionaryOutputReference</a>

---

##### `large_custom_dictionary`<sup>Required</sup> <a name="large_custom_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionary"></a>

```python
large_custom_dictionary: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regex"></a>

```python
regex: DataLossPreventionStoredInfoTypeRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference">DataLossPreventionStoredInfoTypeRegexOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeouts"></a>

```python
timeouts: DataLossPreventionStoredInfoTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference">DataLossPreventionStoredInfoTypeTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dictionary_input`<sup>Optional</sup> <a name="dictionary_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.dictionaryInput"></a>

```python
dictionary_input: DataLossPreventionStoredInfoTypeDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `large_custom_dictionary_input`<sup>Optional</sup> <a name="large_custom_dictionary_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.largeCustomDictionaryInput"></a>

```python
large_custom_dictionary_input: DataLossPreventionStoredInfoTypeLargeCustomDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.regexInput"></a>

```python
regex_input: DataLossPreventionStoredInfoTypeRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

---

##### `stored_info_type_id_input`<sup>Optional</sup> <a name="stored_info_type_id_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeIdInput"></a>

```python
stored_info_type_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataLossPreventionStoredInfoTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `stored_info_type_id`<sup>Required</sup> <a name="stored_info_type_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.storedInfoTypeId"></a>

```python
stored_info_type_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataLossPreventionStoredInfoTypeConfig <a name="DataLossPreventionStoredInfoTypeConfig" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  parent: str,
  description: str = None,
  dictionary: DataLossPreventionStoredInfoTypeDictionary = None,
  display_name: str = None,
  id: str = None,
  large_custom_dictionary: DataLossPreventionStoredInfoTypeLargeCustomDictionary = None,
  regex: DataLossPreventionStoredInfoTypeRegex = None,
  stored_info_type_id: str = None,
  timeouts: DataLossPreventionStoredInfoTypeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the info type in any of the following formats:. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.description">description</a></code> | <code>str</code> | A description of the info type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dictionary">dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.displayName">display_name</a></code> | <code>str</code> | User set display name of the info type. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.largeCustomDictionary">large_custom_dictionary</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | large_custom_dictionary block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.regex">regex</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.storedInfoTypeId">stored_info_type_id</a></code> | <code>str</code> | The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens; |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the info type in any of the following formats:.

* 'projects/{{project}}'
* 'projects/{{project}}/locations/{{location}}'
* 'organizations/{{organization_id}}'
* 'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#parent DataLossPreventionStoredInfoType#parent}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#description DataLossPreventionStoredInfoType#description}

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.dictionary"></a>

```python
dictionary: DataLossPreventionStoredInfoTypeDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#dictionary DataLossPreventionStoredInfoType#dictionary}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User set display name of the info type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#display_name DataLossPreventionStoredInfoType#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#id DataLossPreventionStoredInfoType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `large_custom_dictionary`<sup>Optional</sup> <a name="large_custom_dictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.largeCustomDictionary"></a>

```python
large_custom_dictionary: DataLossPreventionStoredInfoTypeLargeCustomDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

large_custom_dictionary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#large_custom_dictionary DataLossPreventionStoredInfoType#large_custom_dictionary}

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.regex"></a>

```python
regex: DataLossPreventionStoredInfoTypeRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

regex block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#regex DataLossPreventionStoredInfoType#regex}

---

##### `stored_info_type_id`<sup>Optional</sup> <a name="stored_info_type_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.storedInfoTypeId"></a>

```python
stored_info_type_id: str
```

- *Type:* str

The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;

that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
characters. Can be empty to allow the system to generate one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#stored_info_type_id DataLossPreventionStoredInfoType#stored_info_type_id}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeConfig.property.timeouts"></a>

```python
timeouts: DataLossPreventionStoredInfoTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#timeouts DataLossPreventionStoredInfoType#timeouts}

---

### DataLossPreventionStoredInfoTypeDictionary <a name="DataLossPreventionStoredInfoTypeDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary(
  cloud_storage_path: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath = None,
  word_list: DataLossPreventionStoredInfoTypeDictionaryWordListStruct = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.cloudStoragePath">cloud_storage_path</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.wordList">word_list</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | word_list block. |

---

##### `cloud_storage_path`<sup>Optional</sup> <a name="cloud_storage_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.cloudStoragePath"></a>

```python
cloud_storage_path: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#cloud_storage_path DataLossPreventionStoredInfoType#cloud_storage_path}

---

##### `word_list`<sup>Optional</sup> <a name="word_list" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary.property.wordList"></a>

```python
word_list: DataLossPreventionStoredInfoTypeDictionaryWordListStruct
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

word_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#word_list DataLossPreventionStoredInfoType#word_list}

---

### DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath <a name="DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.property.path">path</a></code> | <code>str</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath.property.path"></a>

```python
path: str
```

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}

---

### DataLossPreventionStoredInfoTypeDictionaryWordListStruct <a name="DataLossPreventionStoredInfoTypeDictionaryWordListStruct" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct(
  words: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct.property.words">words</a></code> | <code>typing.List[str]</code> | Words or phrases defining the dictionary. |

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct.property.words"></a>

```python
words: typing.List[str]
```

- *Type:* typing.List[str]

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#words DataLossPreventionStoredInfoType#words}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionary <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionary" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary(
  output_path: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath,
  big_query_field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField = None,
  cloud_storage_file_set: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.outputPath">output_path</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | output_path block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.bigQueryField">big_query_field</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | big_query_field block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.cloudStorageFileSet">cloud_storage_file_set</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | cloud_storage_file_set block. |

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.outputPath"></a>

```python
output_path: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

output_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#output_path DataLossPreventionStoredInfoType#output_path}

---

##### `big_query_field`<sup>Optional</sup> <a name="big_query_field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.bigQueryField"></a>

```python
big_query_field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

big_query_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#big_query_field DataLossPreventionStoredInfoType#big_query_field}

---

##### `cloud_storage_file_set`<sup>Optional</sup> <a name="cloud_storage_file_set" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary.property.cloudStorageFileSet"></a>

```python
cloud_storage_file_set: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

cloud_storage_file_set block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#cloud_storage_file_set DataLossPreventionStoredInfoType#cloud_storage_file_set}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField(
  field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField,
  table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.field">field</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | field block. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | table block. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.field"></a>

```python
field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#field DataLossPreventionStoredInfoType#field}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField.property.table"></a>

```python
table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#table DataLossPreventionStoredInfoType#table}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.property.name">name</a></code> | <code>str</code> | Name describing the field. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField.property.name"></a>

```python
name: str
```

- *Type:* str

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#name DataLossPreventionStoredInfoType#name}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable(
  dataset_id: str,
  project_id: str,
  table_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.datasetId">dataset_id</a></code> | <code>str</code> | The dataset ID of the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.projectId">project_id</a></code> | <code>str</code> | The Google Cloud Platform project ID of the project containing the table. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.tableId">table_id</a></code> | <code>str</code> | The name of the table. |

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#dataset_id DataLossPreventionStoredInfoType#dataset_id}

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#project_id DataLossPreventionStoredInfoType#project_id}

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#table_id DataLossPreventionStoredInfoType#table_id}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet(
  url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.property.url">url</a></code> | <code>str</code> | The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet.property.url"></a>

```python
url: str
```

- *Type:* str

The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#url DataLossPreventionStoredInfoType#url}

---

### DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath(
  path: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.property.path">path</a></code> | <code>str</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath.property.path"></a>

```python
path: str
```

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}

---

### DataLossPreventionStoredInfoTypeRegex <a name="DataLossPreventionStoredInfoTypeRegex" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex(
  pattern: str,
  group_indexes: typing.List[typing.Union[int, float]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.pattern">pattern</a></code> | <code>str</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.groupIndexes">group_indexes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | The index of the submatch to extract as findings. |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#pattern DataLossPreventionStoredInfoType#pattern}

---

##### `group_indexes`<sup>Optional</sup> <a name="group_indexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex.property.groupIndexes"></a>

```python
group_indexes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#group_indexes DataLossPreventionStoredInfoType#group_indexes}

---

### DataLossPreventionStoredInfoTypeTimeouts <a name="DataLossPreventionStoredInfoTypeTimeouts" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#create DataLossPreventionStoredInfoType#create}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#delete DataLossPreventionStoredInfoType#delete}. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#update DataLossPreventionStoredInfoType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#create DataLossPreventionStoredInfoType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#delete DataLossPreventionStoredInfoType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#update DataLossPreventionStoredInfoType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference <a name="DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---


### DataLossPreventionStoredInfoTypeDictionaryOutputReference <a name="DataLossPreventionStoredInfoTypeDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath">put_cloud_storage_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList">put_word_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetCloudStoragePath">reset_cloud_storage_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetWordList">reset_word_list</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloud_storage_path` <a name="put_cloud_storage_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath"></a>

```python
def put_cloud_storage_path(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putCloudStoragePath.parameter.path"></a>

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}

---

##### `put_word_list` <a name="put_word_list" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList"></a>

```python
def put_word_list(
  words: typing.List[str]
) -> None
```

###### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.putWordList.parameter.words"></a>

- *Type:* typing.List[str]

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#words DataLossPreventionStoredInfoType#words}

---

##### `reset_cloud_storage_path` <a name="reset_cloud_storage_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetCloudStoragePath"></a>

```python
def reset_cloud_storage_path() -> None
```

##### `reset_word_list` <a name="reset_word_list" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.resetWordList"></a>

```python
def reset_word_list() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePath">cloud_storage_path</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordList">word_list</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference">DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePathInput">cloud_storage_path_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordListInput">word_list_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_storage_path`<sup>Required</sup> <a name="cloud_storage_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePath"></a>

```python
cloud_storage_path: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference</a>

---

##### `word_list`<sup>Required</sup> <a name="word_list" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordList"></a>

```python
word_list: DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference">DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference</a>

---

##### `cloud_storage_path_input`<sup>Optional</sup> <a name="cloud_storage_path_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.cloudStoragePathInput"></a>

```python
cloud_storage_path_input: DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath">DataLossPreventionStoredInfoTypeDictionaryCloudStoragePath</a>

---

##### `word_list_input`<sup>Optional</sup> <a name="word_list_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.wordListInput"></a>

```python
word_list_input: DataLossPreventionStoredInfoTypeDictionaryWordListStruct
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionary">DataLossPreventionStoredInfoTypeDictionary</a>

---


### DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference <a name="DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.wordsInput">words_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.words">words</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `words_input`<sup>Optional</sup> <a name="words_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.wordsInput"></a>

```python
words_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.words"></a>

```python
words: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeDictionaryWordListStruct
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeDictionaryWordListStruct">DataLossPreventionStoredInfoTypeDictionaryWordListStruct</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField">put_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable">put_table</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_field` <a name="put_field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField"></a>

```python
def put_field(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putField.parameter.name"></a>

- *Type:* str

Name describing the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#name DataLossPreventionStoredInfoType#name}

---

##### `put_table` <a name="put_table" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable"></a>

```python
def put_table(
  dataset_id: str,
  project_id: str,
  table_id: str
) -> None
```

###### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.datasetId"></a>

- *Type:* str

The dataset ID of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#dataset_id DataLossPreventionStoredInfoType#dataset_id}

---

###### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.projectId"></a>

- *Type:* str

The Google Cloud Platform project ID of the project containing the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#project_id DataLossPreventionStoredInfoType#project_id}

---

###### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.putTable.parameter.tableId"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#table_id DataLossPreventionStoredInfoType#table_id}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.field">field</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.table">table</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fieldInput">field_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.tableInput">table_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.field"></a>

```python
field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference</a>

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.table"></a>

```python
table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference</a>

---

##### `field_input`<sup>Optional</sup> <a name="field_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.fieldInput"></a>

```python
field_input: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.tableInput"></a>

```python
table_input: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetIdInput">dataset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableIdInput">table_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetId">dataset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableId">table_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_id_input`<sup>Optional</sup> <a name="dataset_id_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetIdInput"></a>

```python
dataset_id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `table_id_input`<sup>Optional</sup> <a name="table_id_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableIdInput"></a>

```python
table_id_input: str
```

- *Type:* str

---

##### `dataset_id`<sup>Required</sup> <a name="dataset_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.datasetId"></a>

```python
dataset_id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `table_id`<sup>Required</sup> <a name="table_id" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.tableId"></a>

```python
table_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---


### DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference <a name="DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField">put_big_query_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet">put_cloud_storage_file_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath">put_output_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetBigQueryField">reset_big_query_field</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetCloudStorageFileSet">reset_cloud_storage_file_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_big_query_field` <a name="put_big_query_field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField"></a>

```python
def put_big_query_field(
  field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField,
  table: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable
) -> None
```

###### `field`<sup>Required</sup> <a name="field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField.parameter.field"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField</a>

field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#field DataLossPreventionStoredInfoType#field}

---

###### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putBigQueryField.parameter.table"></a>

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable</a>

table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#table DataLossPreventionStoredInfoType#table}

---

##### `put_cloud_storage_file_set` <a name="put_cloud_storage_file_set" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet"></a>

```python
def put_cloud_storage_file_set(
  url: str
) -> None
```

###### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putCloudStorageFileSet.parameter.url"></a>

- *Type:* str

The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#url DataLossPreventionStoredInfoType#url}

---

##### `put_output_path` <a name="put_output_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath"></a>

```python
def put_output_path(
  path: str
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.putOutputPath.parameter.path"></a>

- *Type:* str

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/data_loss_prevention_stored_info_type#path DataLossPreventionStoredInfoType#path}

---

##### `reset_big_query_field` <a name="reset_big_query_field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetBigQueryField"></a>

```python
def reset_big_query_field() -> None
```

##### `reset_cloud_storage_file_set` <a name="reset_cloud_storage_file_set" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.resetCloudStorageFileSet"></a>

```python
def reset_cloud_storage_file_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryField">big_query_field</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSet">cloud_storage_file_set</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPath">output_path</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryFieldInput">big_query_field_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSetInput">cloud_storage_file_set_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPathInput">output_path_input</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `big_query_field`<sup>Required</sup> <a name="big_query_field" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryField"></a>

```python
big_query_field: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference</a>

---

##### `cloud_storage_file_set`<sup>Required</sup> <a name="cloud_storage_file_set" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSet"></a>

```python
cloud_storage_file_set: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference</a>

---

##### `output_path`<sup>Required</sup> <a name="output_path" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPath"></a>

```python
output_path: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference</a>

---

##### `big_query_field_input`<sup>Optional</sup> <a name="big_query_field_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.bigQueryFieldInput"></a>

```python
big_query_field_input: DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField">DataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField</a>

---

##### `cloud_storage_file_set_input`<sup>Optional</sup> <a name="cloud_storage_file_set_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.cloudStorageFileSetInput"></a>

```python
cloud_storage_file_set_input: DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet">DataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet</a>

---

##### `output_path_input`<sup>Optional</sup> <a name="output_path_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.outputPathInput"></a>

```python
output_path_input: DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath">DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeLargeCustomDictionary
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeLargeCustomDictionary">DataLossPreventionStoredInfoTypeLargeCustomDictionary</a>

---


### DataLossPreventionStoredInfoTypeRegexOutputReference <a name="DataLossPreventionStoredInfoTypeRegexOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resetGroupIndexes">reset_group_indexes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_group_indexes` <a name="reset_group_indexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.resetGroupIndexes"></a>

```python
def reset_group_indexes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexesInput">group_indexes_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.patternInput">pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexes">group_indexes</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.pattern">pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_indexes_input`<sup>Optional</sup> <a name="group_indexes_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexesInput"></a>

```python
group_indexes_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `pattern_input`<sup>Optional</sup> <a name="pattern_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.patternInput"></a>

```python
pattern_input: str
```

- *Type:* str

---

##### `group_indexes`<sup>Required</sup> <a name="group_indexes" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.groupIndexes"></a>

```python
group_indexes: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.pattern"></a>

```python
pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegexOutputReference.property.internalValue"></a>

```python
internal_value: DataLossPreventionStoredInfoTypeRegex
```

- *Type:* <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeRegex">DataLossPreventionStoredInfoTypeRegex</a>

---


### DataLossPreventionStoredInfoTypeTimeoutsOutputReference <a name="DataLossPreventionStoredInfoTypeTimeoutsOutputReference" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_loss_prevention_stored_info_type

dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataLossPreventionStoredInfoTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataLossPreventionStoredInfoType.DataLossPreventionStoredInfoTypeTimeouts">DataLossPreventionStoredInfoTypeTimeouts</a>]

---



