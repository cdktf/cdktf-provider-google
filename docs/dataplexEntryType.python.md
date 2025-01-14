# `dataplexEntryType` Submodule <a name="`dataplexEntryType` Submodule" id="@cdktf/provider-google.dataplexEntryType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntryType <a name="DataplexEntryType" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type google_dataplex_entry_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  display_name: str = None,
  entry_type_id: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  platform: str = None,
  project: str = None,
  required_aspects: typing.Union[IResolvable, typing.List[DataplexEntryTypeRequiredAspects]] = None,
  system_attribute: str = None,
  timeouts: DataplexEntryTypeTimeouts = None,
  type_aliases: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the EntryType. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.entryTypeId">entry_type_id</a></code> | <code>str</code> | The entry type id of the entry type. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#id DataplexEntryType#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the EntryType. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where entry type will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.platform">platform</a></code> | <code>str</code> | The platform that Entries of this type belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#project DataplexEntryType#project}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.requiredAspects">required_aspects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]</code> | required_aspects block. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.systemAttribute">system_attribute</a></code> | <code>str</code> | The system that Entries of this type belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.typeAliases">type_aliases</a></code> | <code>typing.List[str]</code> | Indicates the class this Entry Type belongs to, for example, TABLE, DATABASE, MODEL. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.description"></a>

- *Type:* str

Description of the EntryType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#description DataplexEntryType#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.displayName"></a>

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#display_name DataplexEntryType#display_name}

---

##### `entry_type_id`<sup>Optional</sup> <a name="entry_type_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.entryTypeId"></a>

- *Type:* str

The entry type id of the entry type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#entry_type_id DataplexEntryType#entry_type_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#id DataplexEntryType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels for the EntryType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#labels DataplexEntryType#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.location"></a>

- *Type:* str

The location where entry type will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#location DataplexEntryType#location}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.platform"></a>

- *Type:* str

The platform that Entries of this type belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#platform DataplexEntryType#platform}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#project DataplexEntryType#project}.

---

##### `required_aspects`<sup>Optional</sup> <a name="required_aspects" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.requiredAspects"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]

required_aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#required_aspects DataplexEntryType#required_aspects}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.systemAttribute"></a>

- *Type:* str

The system that Entries of this type belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#system DataplexEntryType#system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#timeouts DataplexEntryType#timeouts}

---

##### `type_aliases`<sup>Optional</sup> <a name="type_aliases" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.Initializer.parameter.typeAliases"></a>

- *Type:* typing.List[str]

Indicates the class this Entry Type belongs to, for example, TABLE, DATABASE, MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#type_aliases DataplexEntryType#type_aliases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putRequiredAspects">put_required_aspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetEntryTypeId">reset_entry_type_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetRequiredAspects">reset_required_aspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetTypeAliases">reset_type_aliases</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_required_aspects` <a name="put_required_aspects" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putRequiredAspects"></a>

```python
def put_required_aspects(
  value: typing.Union[IResolvable, typing.List[DataplexEntryTypeRequiredAspects]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putRequiredAspects.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#create DataplexEntryType#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#delete DataplexEntryType#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#update DataplexEntryType#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_entry_type_id` <a name="reset_entry_type_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetEntryTypeId"></a>

```python
def reset_entry_type_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_required_aspects` <a name="reset_required_aspects" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetRequiredAspects"></a>

```python
def reset_required_aspects() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type_aliases` <a name="reset_type_aliases" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.resetTypeAliases"></a>

```python
def reset_type_aliases() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataplexEntryType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataplexEntryType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexEntryType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexEntryType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexEntryType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.requiredAspects">required_aspects</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList">DataplexEntryTypeRequiredAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference">DataplexEntryTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.entryTypeIdInput">entry_type_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.requiredAspectsInput">required_aspects_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.systemAttributeInput">system_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.typeAliasesInput">type_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.entryTypeId">entry_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.typeAliases">type_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `required_aspects`<sup>Required</sup> <a name="required_aspects" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.requiredAspects"></a>

```python
required_aspects: DataplexEntryTypeRequiredAspectsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList">DataplexEntryTypeRequiredAspectsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.timeouts"></a>

```python
timeouts: DataplexEntryTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference">DataplexEntryTypeTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entry_type_id_input`<sup>Optional</sup> <a name="entry_type_id_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.entryTypeIdInput"></a>

```python
entry_type_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `required_aspects_input`<sup>Optional</sup> <a name="required_aspects_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.requiredAspectsInput"></a>

```python
required_aspects_input: typing.Union[IResolvable, typing.List[DataplexEntryTypeRequiredAspects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.systemAttributeInput"></a>

```python
system_attribute_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataplexEntryTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a>]

---

##### `type_aliases_input`<sup>Optional</sup> <a name="type_aliases_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.typeAliasesInput"></a>

```python
type_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entry_type_id`<sup>Required</sup> <a name="entry_type_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.entryTypeId"></a>

```python
entry_type_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `type_aliases`<sup>Required</sup> <a name="type_aliases" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.typeAliases"></a>

```python
type_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryTypeConfig <a name="DataplexEntryTypeConfig" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  description: str = None,
  display_name: str = None,
  entry_type_id: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  platform: str = None,
  project: str = None,
  required_aspects: typing.Union[IResolvable, typing.List[DataplexEntryTypeRequiredAspects]] = None,
  system_attribute: str = None,
  timeouts: DataplexEntryTypeTimeouts = None,
  type_aliases: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.description">description</a></code> | <code>str</code> | Description of the EntryType. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.displayName">display_name</a></code> | <code>str</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.entryTypeId">entry_type_id</a></code> | <code>str</code> | The entry type id of the entry type. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#id DataplexEntryType#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels for the EntryType. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.location">location</a></code> | <code>str</code> | The location where entry type will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.platform">platform</a></code> | <code>str</code> | The platform that Entries of this type belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#project DataplexEntryType#project}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.requiredAspects">required_aspects</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]</code> | required_aspects block. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.systemAttribute">system_attribute</a></code> | <code>str</code> | The system that Entries of this type belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.typeAliases">type_aliases</a></code> | <code>typing.List[str]</code> | Indicates the class this Entry Type belongs to, for example, TABLE, DATABASE, MODEL. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the EntryType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#description DataplexEntryType#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#display_name DataplexEntryType#display_name}

---

##### `entry_type_id`<sup>Optional</sup> <a name="entry_type_id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.entryTypeId"></a>

```python
entry_type_id: str
```

- *Type:* str

The entry type id of the entry type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#entry_type_id DataplexEntryType#entry_type_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#id DataplexEntryType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels for the EntryType.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#labels DataplexEntryType#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where entry type will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#location DataplexEntryType#location}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform that Entries of this type belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#platform DataplexEntryType#platform}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#project DataplexEntryType#project}.

---

##### `required_aspects`<sup>Optional</sup> <a name="required_aspects" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.requiredAspects"></a>

```python
required_aspects: typing.Union[IResolvable, typing.List[DataplexEntryTypeRequiredAspects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]

required_aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#required_aspects DataplexEntryType#required_aspects}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

The system that Entries of this type belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#system DataplexEntryType#system}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.timeouts"></a>

```python
timeouts: DataplexEntryTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#timeouts DataplexEntryType#timeouts}

---

##### `type_aliases`<sup>Optional</sup> <a name="type_aliases" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeConfig.property.typeAliases"></a>

```python
type_aliases: typing.List[str]
```

- *Type:* typing.List[str]

Indicates the class this Entry Type belongs to, for example, TABLE, DATABASE, MODEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#type_aliases DataplexEntryType#type_aliases}

---

### DataplexEntryTypeRequiredAspects <a name="DataplexEntryTypeRequiredAspects" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryTypeRequiredAspects(
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects.property.type">type</a></code> | <code>str</code> | Required aspect type for the entry type. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects.property.type"></a>

```python
type: str
```

- *Type:* str

Required aspect type for the entry type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#type DataplexEntryType#type}

---

### DataplexEntryTypeTimeouts <a name="DataplexEntryTypeTimeouts" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryTypeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#create DataplexEntryType#create}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#delete DataplexEntryType#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#update DataplexEntryType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#create DataplexEntryType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#delete DataplexEntryType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.16.0/docs/resources/dataplex_entry_type#update DataplexEntryType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryTypeRequiredAspectsList <a name="DataplexEntryTypeRequiredAspectsList" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryTypeRequiredAspectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexEntryTypeRequiredAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataplexEntryTypeRequiredAspects]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]]

---


### DataplexEntryTypeRequiredAspectsOutputReference <a name="DataplexEntryTypeRequiredAspectsOutputReference" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspectsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataplexEntryTypeRequiredAspects]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeRequiredAspects">DataplexEntryTypeRequiredAspects</a>]

---


### DataplexEntryTypeTimeoutsOutputReference <a name="DataplexEntryTypeTimeoutsOutputReference" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry_type

dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataplexEntryTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataplexEntryType.DataplexEntryTypeTimeouts">DataplexEntryTypeTimeouts</a>]

---



