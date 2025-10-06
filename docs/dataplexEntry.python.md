# `dataplexEntry` Submodule <a name="`dataplexEntry` Submodule" id="@cdktf/provider-google.dataplexEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexEntry <a name="DataplexEntry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry google_dataplex_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntry(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entry_type: str,
  aspects: IResolvable | typing.List[DataplexEntryAspects] = None,
  entry_group_id: str = None,
  entry_id: str = None,
  entry_source: DataplexEntryEntrySource = None,
  fully_qualified_name: str = None,
  id: str = None,
  location: str = None,
  parent_entry: str = None,
  project: str = None,
  timeouts: DataplexEntryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entryType">entry_type</a></code> | <code>str</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.aspects">aspects</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]</code> | aspects block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entryGroupId">entry_group_id</a></code> | <code>str</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entryId">entry_id</a></code> | <code>str</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entrySource">entry_source</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#id DataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.location">location</a></code> | <code>str</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.parentEntry">parent_entry</a></code> | <code>str</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#project DataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entryType"></a>

- *Type:* str

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_type DataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.aspects"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#aspects DataplexEntry#aspects}

---

##### `entry_group_id`<sup>Optional</sup> <a name="entry_group_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entryGroupId"></a>

- *Type:* str

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_group_id DataplexEntry#entry_group_id}

---

##### `entry_id`<sup>Optional</sup> <a name="entry_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entryId"></a>

- *Type:* str

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_id DataplexEntry#entry_id}

---

##### `entry_source`<sup>Optional</sup> <a name="entry_source" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.entrySource"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_source DataplexEntry#entry_source}

---

##### `fully_qualified_name`<sup>Optional</sup> <a name="fully_qualified_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.fullyQualifiedName"></a>

- *Type:* str

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#fully_qualified_name DataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#id DataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.location"></a>

- *Type:* str

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#location DataplexEntry#location}

---

##### `parent_entry`<sup>Optional</sup> <a name="parent_entry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.parentEntry"></a>

- *Type:* str

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#parent_entry DataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#project DataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#timeouts DataplexEntry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects">put_aspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource">put_entry_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetAspects">reset_aspects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryGroupId">reset_entry_group_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryId">reset_entry_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntrySource">reset_entry_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetFullyQualifiedName">reset_fully_qualified_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetParentEntry">reset_parent_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_aspects` <a name="put_aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects"></a>

```python
def put_aspects(
  value: IResolvable | typing.List[DataplexEntryAspects]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putAspects.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]

---

##### `put_entry_source` <a name="put_entry_source" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource"></a>

```python
def put_entry_source(
  ancestors: IResolvable | typing.List[DataplexEntryEntrySourceAncestors] = None,
  create_time: str = None,
  description: str = None,
  display_name: str = None,
  labels: typing.Mapping[str] = None,
  platform: str = None,
  resource: str = None,
  system_attribute: str = None,
  update_time: str = None
) -> None
```

###### `ancestors`<sup>Optional</sup> <a name="ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.ancestors"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#ancestors DataplexEntry#ancestors}

---

###### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.createTime"></a>

- *Type:* str

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#create_time DataplexEntry#create_time}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.description"></a>

- *Type:* str

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#description DataplexEntry#description}

---

###### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.displayName"></a>

- *Type:* str

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#display_name DataplexEntry#display_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.labels"></a>

- *Type:* typing.Mapping[str]

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#labels DataplexEntry#labels}

---

###### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.platform"></a>

- *Type:* str

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#platform DataplexEntry#platform}

---

###### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.resource"></a>

- *Type:* str

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#resource DataplexEntry#resource}

---

###### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.systemAttribute"></a>

- *Type:* str

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#system DataplexEntry#system}

---

###### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putEntrySource.parameter.updateTime"></a>

- *Type:* str

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#update_time DataplexEntry#update_time}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#create DataplexEntry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#update DataplexEntry#update}.

---

##### `reset_aspects` <a name="reset_aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetAspects"></a>

```python
def reset_aspects() -> None
```

##### `reset_entry_group_id` <a name="reset_entry_group_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryGroupId"></a>

```python
def reset_entry_group_id() -> None
```

##### `reset_entry_id` <a name="reset_entry_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntryId"></a>

```python
def reset_entry_id() -> None
```

##### `reset_entry_source` <a name="reset_entry_source" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetEntrySource"></a>

```python
def reset_entry_source() -> None
```

##### `reset_fully_qualified_name` <a name="reset_fully_qualified_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetFullyQualifiedName"></a>

```python
def reset_fully_qualified_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_parent_entry` <a name="reset_parent_entry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetParentEntry"></a>

```python
def reset_parent_entry() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataplexEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataplexEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataplexEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplexEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspects">aspects</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList">DataplexEntryAspectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySource">entry_source</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference">DataplexEntryEntrySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference">DataplexEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspectsInput">aspects_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupIdInput">entry_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySourceInput">entry_source_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryTypeInput">entry_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedNameInput">fully_qualified_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntryInput">parent_entry_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupId">entry_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryType">entry_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntry">parent_entry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `aspects`<sup>Required</sup> <a name="aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspects"></a>

```python
aspects: DataplexEntryAspectsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList">DataplexEntryAspectsList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `entry_source`<sup>Required</sup> <a name="entry_source" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySource"></a>

```python
entry_source: DataplexEntryEntrySourceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference">DataplexEntryEntrySourceOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeouts"></a>

```python
timeouts: DataplexEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference">DataplexEntryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `aspects_input`<sup>Optional</sup> <a name="aspects_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.aspectsInput"></a>

```python
aspects_input: IResolvable | typing.List[DataplexEntryAspects]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]

---

##### `entry_group_id_input`<sup>Optional</sup> <a name="entry_group_id_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupIdInput"></a>

```python
entry_group_id_input: str
```

- *Type:* str

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `entry_source_input`<sup>Optional</sup> <a name="entry_source_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entrySourceInput"></a>

```python
entry_source_input: DataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---

##### `entry_type_input`<sup>Optional</sup> <a name="entry_type_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryTypeInput"></a>

```python
entry_type_input: str
```

- *Type:* str

---

##### `fully_qualified_name_input`<sup>Optional</sup> <a name="fully_qualified_name_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedNameInput"></a>

```python
fully_qualified_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `parent_entry_input`<sup>Optional</sup> <a name="parent_entry_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntryInput"></a>

```python
parent_entry_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataplexEntryTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

---

##### `entry_group_id`<sup>Required</sup> <a name="entry_group_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryGroupId"></a>

```python
entry_group_id: str
```

- *Type:* str

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.entryType"></a>

```python
entry_type: str
```

- *Type:* str

---

##### `fully_qualified_name`<sup>Required</sup> <a name="fully_qualified_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `parent_entry`<sup>Required</sup> <a name="parent_entry" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.parentEntry"></a>

```python
parent_entry: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataplexEntry.DataplexEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexEntryAspects <a name="DataplexEntryAspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryAspects(
  aspect: DataplexEntryAspectsAspect,
  aspect_key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | aspect block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspectKey">aspect_key</a></code> | <code>str</code> | Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:. |

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspect"></a>

```python
aspect: DataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

aspect block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#aspect DataplexEntry#aspect}

---

##### `aspect_key`<sup>Required</sup> <a name="aspect_key" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspects.property.aspectKey"></a>

```python
aspect_key: str
```

- *Type:* str

Depending on how the aspect is attached to the entry, the format of the aspect key can be one of the following:.

If the aspect is attached directly to the entry: {project_number}.{locationId}.{aspectTypeId}
If the aspect is attached to an entry's path: {project_number}.{locationId}.{aspectTypeId}@{path}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#aspect_key DataplexEntry#aspect_key}

---

### DataplexEntryAspectsAspect <a name="DataplexEntryAspectsAspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryAspectsAspect(
  data: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.property.data">data</a></code> | <code>str</code> | The content of the aspect in JSON form, according to its aspect type schema. |

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect.property.data"></a>

```python
data: str
```

- *Type:* str

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#data DataplexEntry#data}

---

### DataplexEntryConfig <a name="DataplexEntryConfig" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  entry_type: str,
  aspects: IResolvable | typing.List[DataplexEntryAspects] = None,
  entry_group_id: str = None,
  entry_id: str = None,
  entry_source: DataplexEntryEntrySource = None,
  fully_qualified_name: str = None,
  id: str = None,
  location: str = None,
  parent_entry: str = None,
  project: str = None,
  timeouts: DataplexEntryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryType">entry_type</a></code> | <code>str</code> | The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.aspects">aspects</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]</code> | aspects block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryGroupId">entry_group_id</a></code> | <code>str</code> | The entry group id of the entry group the entry will be created in. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryId">entry_id</a></code> | <code>str</code> | The entry id of the entry. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entrySource">entry_source</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | entry_source block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.fullyQualifiedName">fully_qualified_name</a></code> | <code>str</code> | A name for the entry that can be referenced by an external system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#id DataplexEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.location">location</a></code> | <code>str</code> | The location where entry will be created. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.parentEntry">parent_entry</a></code> | <code>str</code> | The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#project DataplexEntry#project}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `entry_type`<sup>Required</sup> <a name="entry_type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryType"></a>

```python
entry_type: str
```

- *Type:* str

The relative resource name of the entry type that was used to create this entry, in the format projects/{project_number}/locations/{locationId}/entryTypes/{entryTypeId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_type DataplexEntry#entry_type}

---

##### `aspects`<sup>Optional</sup> <a name="aspects" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.aspects"></a>

```python
aspects: IResolvable | typing.List[DataplexEntryAspects]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]

aspects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#aspects DataplexEntry#aspects}

---

##### `entry_group_id`<sup>Optional</sup> <a name="entry_group_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryGroupId"></a>

```python
entry_group_id: str
```

- *Type:* str

The entry group id of the entry group the entry will be created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_group_id DataplexEntry#entry_group_id}

---

##### `entry_id`<sup>Optional</sup> <a name="entry_id" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

The entry id of the entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_id DataplexEntry#entry_id}

---

##### `entry_source`<sup>Optional</sup> <a name="entry_source" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.entrySource"></a>

```python
entry_source: DataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

entry_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#entry_source DataplexEntry#entry_source}

---

##### `fully_qualified_name`<sup>Optional</sup> <a name="fully_qualified_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.fullyQualifiedName"></a>

```python
fully_qualified_name: str
```

- *Type:* str

A name for the entry that can be referenced by an external system.

For more information, see https://cloud.google.com/dataplex/docs/fully-qualified-names.
The maximum size of the field is 4000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#fully_qualified_name DataplexEntry#fully_qualified_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#id DataplexEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location where entry will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#location DataplexEntry#location}

---

##### `parent_entry`<sup>Optional</sup> <a name="parent_entry" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.parentEntry"></a>

```python
parent_entry: str
```

- *Type:* str

The resource name of the parent entry, in the format projects/{project_number}/locations/{locationId}/entryGroups/{entryGroupId}/entries/{entryId}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#parent_entry DataplexEntry#parent_entry}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#project DataplexEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntryConfig.property.timeouts"></a>

```python
timeouts: DataplexEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#timeouts DataplexEntry#timeouts}

---

### DataplexEntryEntrySource <a name="DataplexEntryEntrySource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryEntrySource(
  ancestors: IResolvable | typing.List[DataplexEntryEntrySourceAncestors] = None,
  create_time: str = None,
  description: str = None,
  display_name: str = None,
  labels: typing.Mapping[str] = None,
  platform: str = None,
  resource: str = None,
  system_attribute: str = None,
  update_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.ancestors">ancestors</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]</code> | ancestors block. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.createTime">create_time</a></code> | <code>str</code> | The time when the resource was created in the source system. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.description">description</a></code> | <code>str</code> | A description of the data resource. Maximum length is 2,000 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.displayName">display_name</a></code> | <code>str</code> | A user-friendly display name. Maximum length is 500 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.platform">platform</a></code> | <code>str</code> | The platform containing the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.resource">resource</a></code> | <code>str</code> | The name of the resource in the source system. Maximum length is 4,000 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.systemAttribute">system_attribute</a></code> | <code>str</code> | The name of the source system. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.updateTime">update_time</a></code> | <code>str</code> | The time when the resource was last updated in the source system. |

---

##### `ancestors`<sup>Optional</sup> <a name="ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.ancestors"></a>

```python
ancestors: IResolvable | typing.List[DataplexEntryEntrySourceAncestors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]

ancestors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#ancestors DataplexEntry#ancestors}

---

##### `create_time`<sup>Optional</sup> <a name="create_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

The time when the resource was created in the source system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#create_time DataplexEntry#create_time}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the data resource. Maximum length is 2,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#description DataplexEntry#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

A user-friendly display name. Maximum length is 500 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#display_name DataplexEntry#display_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User-defined labels.

The maximum size of keys and values is 128 characters each.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#labels DataplexEntry#labels}

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.platform"></a>

```python
platform: str
```

- *Type:* str

The platform containing the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#platform DataplexEntry#platform}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.resource"></a>

```python
resource: str
```

- *Type:* str

The name of the resource in the source system. Maximum length is 4,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#resource DataplexEntry#resource}

---

##### `system_attribute`<sup>Optional</sup> <a name="system_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

The name of the source system. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#system DataplexEntry#system}

---

##### `update_time`<sup>Optional</sup> <a name="update_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

The time when the resource was last updated in the source system.

If the entry exists in the system and its EntrySource has updateTime populated,
further updates to the EntrySource of the entry must provide incremental updates to its updateTime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#update_time DataplexEntry#update_time}

---

### DataplexEntryEntrySourceAncestors <a name="DataplexEntryEntrySourceAncestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryEntrySourceAncestors(
  name: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.name">name</a></code> | <code>str</code> | The name of the ancestor resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.type">type</a></code> | <code>str</code> | The type of the ancestor resource. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#name DataplexEntry#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the ancestor resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#type DataplexEntry#type}

---

### DataplexEntryTimeouts <a name="DataplexEntryTimeouts" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#create DataplexEntry#create}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#update DataplexEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#create DataplexEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#delete DataplexEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#update DataplexEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexEntryAspectsAspectOutputReference <a name="DataplexEntryAspectsAspectOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryAspectsAspectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.aspectType">aspect_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.dataInput">data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect_type`<sup>Required</sup> <a name="aspect_type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.aspectType"></a>

```python
aspect_type: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `data_input`<sup>Optional</sup> <a name="data_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.dataInput"></a>

```python
data_input: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference.property.internalValue"></a>

```python
internal_value: DataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---


### DataplexEntryAspectsList <a name="DataplexEntryAspectsList" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryAspectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexEntryAspectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataplexEntryAspects]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>]

---


### DataplexEntryAspectsOutputReference <a name="DataplexEntryAspectsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryAspectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect">put_aspect</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_aspect` <a name="put_aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect"></a>

```python
def put_aspect(
  data: str
) -> None
```

###### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.putAspect.parameter.data"></a>

- *Type:* str

The content of the aspect in JSON form, according to its aspect type schema.

The maximum size of the field is 120KB (encoded as UTF-8).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dataplex_entry#data DataplexEntry#data}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspect">aspect</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference">DataplexEntryAspectsAspectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectInput">aspect_input</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKeyInput">aspect_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKey">aspect_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aspect`<sup>Required</sup> <a name="aspect" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspect"></a>

```python
aspect: DataplexEntryAspectsAspectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspectOutputReference">DataplexEntryAspectsAspectOutputReference</a>

---

##### `aspect_input`<sup>Optional</sup> <a name="aspect_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectInput"></a>

```python
aspect_input: DataplexEntryAspectsAspect
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsAspect">DataplexEntryAspectsAspect</a>

---

##### `aspect_key_input`<sup>Optional</sup> <a name="aspect_key_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKeyInput"></a>

```python
aspect_key_input: str
```

- *Type:* str

---

##### `aspect_key`<sup>Required</sup> <a name="aspect_key" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.aspectKey"></a>

```python
aspect_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryAspectsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexEntryAspects
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryAspects">DataplexEntryAspects</a>

---


### DataplexEntryEntrySourceAncestorsList <a name="DataplexEntryEntrySourceAncestorsList" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryEntrySourceAncestorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataplexEntryEntrySourceAncestorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[DataplexEntryEntrySourceAncestors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]

---


### DataplexEntryEntrySourceAncestorsOutputReference <a name="DataplexEntryEntrySourceAncestorsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexEntryEntrySourceAncestors
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>

---


### DataplexEntryEntrySourceOutputReference <a name="DataplexEntryEntrySourceOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryEntrySourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors">put_ancestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetAncestors">reset_ancestors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetCreateTime">reset_create_time</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetResource">reset_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetSystemAttribute">reset_system_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetUpdateTime">reset_update_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ancestors` <a name="put_ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors"></a>

```python
def put_ancestors(
  value: IResolvable | typing.List[DataplexEntryEntrySourceAncestors]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.putAncestors.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]

---

##### `reset_ancestors` <a name="reset_ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetAncestors"></a>

```python
def reset_ancestors() -> None
```

##### `reset_create_time` <a name="reset_create_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetCreateTime"></a>

```python
def reset_create_time() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_resource` <a name="reset_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetResource"></a>

```python
def reset_resource() -> None
```

##### `reset_system_attribute` <a name="reset_system_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetSystemAttribute"></a>

```python
def reset_system_attribute() -> None
```

##### `reset_update_time` <a name="reset_update_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.resetUpdateTime"></a>

```python
def reset_update_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestors">ancestors</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList">DataplexEntryEntrySourceAncestorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestorsInput">ancestors_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTimeInput">create_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resourceInput">resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttributeInput">system_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTimeInput">update_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resource">resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttribute">system_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ancestors`<sup>Required</sup> <a name="ancestors" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestors"></a>

```python
ancestors: DataplexEntryEntrySourceAncestorsList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestorsList">DataplexEntryEntrySourceAncestorsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `ancestors_input`<sup>Optional</sup> <a name="ancestors_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.ancestorsInput"></a>

```python
ancestors_input: IResolvable | typing.List[DataplexEntryEntrySourceAncestors]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceAncestors">DataplexEntryEntrySourceAncestors</a>]

---

##### `create_time_input`<sup>Optional</sup> <a name="create_time_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTimeInput"></a>

```python
create_time_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `resource_input`<sup>Optional</sup> <a name="resource_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resourceInput"></a>

```python
resource_input: str
```

- *Type:* str

---

##### `system_attribute_input`<sup>Optional</sup> <a name="system_attribute_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttributeInput"></a>

```python
system_attribute_input: str
```

- *Type:* str

---

##### `update_time_input`<sup>Optional</sup> <a name="update_time_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTimeInput"></a>

```python
update_time_input: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.resource"></a>

```python
resource: str
```

- *Type:* str

---

##### `system_attribute`<sup>Required</sup> <a name="system_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.systemAttribute"></a>

```python
system_attribute: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySourceOutputReference.property.internalValue"></a>

```python
internal_value: DataplexEntryEntrySource
```

- *Type:* <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryEntrySource">DataplexEntryEntrySource</a>

---


### DataplexEntryTimeoutsOutputReference <a name="DataplexEntryTimeoutsOutputReference" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import dataplex_entry

dataplexEntry.DataplexEntryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataplexEntry.DataplexEntryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataplexEntryTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dataplexEntry.DataplexEntryTimeouts">DataplexEntryTimeouts</a>

---



