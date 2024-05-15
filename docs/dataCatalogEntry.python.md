# `dataCatalogEntry` Submodule <a name="`dataCatalogEntry` Submodule" id="@cdktf/provider-google.dataCatalogEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogEntry <a name="DataCatalogEntry" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry google_data_catalog_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_group: str,
  entry_id: str,
  description: str = None,
  display_name: str = None,
  gcs_fileset_spec: DataCatalogEntryGcsFilesetSpec = None,
  id: str = None,
  linked_resource: str = None,
  schema: str = None,
  timeouts: DataCatalogEntryTimeouts = None,
  type: str = None,
  user_specified_system: str = None,
  user_specified_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.entryGroup">entry_group</a></code> | <code>str</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.entryId">entry_id</a></code> | <code>str</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.description">description</a></code> | <code>str</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.gcsFilesetSpec">gcs_fileset_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#id DataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.linkedResource">linked_resource</a></code> | <code>str</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.schema">schema</a></code> | <code>str</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.type">type</a></code> | <code>str</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.userSpecifiedSystem">user_specified_system</a></code> | <code>str</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.userSpecifiedType">user_specified_type</a></code> | <code>str</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.entryGroup"></a>

- *Type:* str

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#entry_group DataCatalogEntry#entry_group}

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.entryId"></a>

- *Type:* str

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#entry_id DataCatalogEntry#entry_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.description"></a>

- *Type:* str

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#description DataCatalogEntry#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.displayName"></a>

- *Type:* str

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#display_name DataCatalogEntry#display_name}

---

##### `gcs_fileset_spec`<sup>Optional</sup> <a name="gcs_fileset_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.gcsFilesetSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#gcs_fileset_spec DataCatalogEntry#gcs_fileset_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#id DataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linked_resource`<sup>Optional</sup> <a name="linked_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.linkedResource"></a>

- *Type:* str

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#linked_resource DataCatalogEntry#linked_resource}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.schema"></a>

- *Type:* str

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#schema DataCatalogEntry#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#timeouts DataCatalogEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.type"></a>

- *Type:* str

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#type DataCatalogEntry#type}

---

##### `user_specified_system`<sup>Optional</sup> <a name="user_specified_system" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.userSpecifiedSystem"></a>

- *Type:* str

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#user_specified_system DataCatalogEntry#user_specified_system}

---

##### `user_specified_type`<sup>Optional</sup> <a name="user_specified_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.Initializer.parameter.userSpecifiedType"></a>

- *Type:* str

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#user_specified_type DataCatalogEntry#user_specified_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec">put_gcs_fileset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetGcsFilesetSpec">reset_gcs_fileset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetLinkedResource">reset_linked_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetSchema">reset_schema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedSystem">reset_user_specified_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedType">reset_user_specified_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_gcs_fileset_spec` <a name="put_gcs_fileset_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec"></a>

```python
def put_gcs_fileset_spec(
  file_patterns: typing.List[str]
) -> None
```

###### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putGcsFilesetSpec.parameter.filePatterns"></a>

- *Type:* typing.List[str]

Patterns to identify a set of files in Google Cloud Storage.

See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
* gs://bucket_name/file*: matches files prefixed by file in bucket_name
* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
* gs://bucket_name/a/* /b: matches all files in bucket_name that match a/* /b pattern, such as a/c/b, a/d/b
* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#file_patterns DataCatalogEntry#file_patterns}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#create DataCatalogEntry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#delete DataCatalogEntry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#update DataCatalogEntry#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_gcs_fileset_spec` <a name="reset_gcs_fileset_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetGcsFilesetSpec"></a>

```python
def reset_gcs_fileset_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_linked_resource` <a name="reset_linked_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetLinkedResource"></a>

```python
def reset_linked_resource() -> None
```

##### `reset_schema` <a name="reset_schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetSchema"></a>

```python
def reset_schema() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_user_specified_system` <a name="reset_user_specified_system" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedSystem"></a>

```python
def reset_user_specified_system() -> None
```

##### `reset_user_specified_type` <a name="reset_user_specified_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.resetUserSpecifiedType"></a>

```python
def reset_user_specified_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCatalogEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCatalogEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCatalogEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCatalogEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryDateShardedSpec">bigquery_date_sharded_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList">DataCatalogEntryBigqueryDateShardedSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryTableSpec">bigquery_table_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList">DataCatalogEntryBigqueryTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpec">gcs_fileset_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference">DataCatalogEntryGcsFilesetSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.integratedSystem">integrated_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference">DataCatalogEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroupInput">entry_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryIdInput">entry_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpecInput">gcs_fileset_spec_input</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResourceInput">linked_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schemaInput">schema_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystemInput">user_specified_system_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedTypeInput">user_specified_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroup">entry_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryId">entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResource">linked_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schema">schema</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystem">user_specified_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedType">user_specified_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bigquery_date_sharded_spec`<sup>Required</sup> <a name="bigquery_date_sharded_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryDateShardedSpec"></a>

```python
bigquery_date_sharded_spec: DataCatalogEntryBigqueryDateShardedSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList">DataCatalogEntryBigqueryDateShardedSpecList</a>

---

##### `bigquery_table_spec`<sup>Required</sup> <a name="bigquery_table_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.bigqueryTableSpec"></a>

```python
bigquery_table_spec: DataCatalogEntryBigqueryTableSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList">DataCatalogEntryBigqueryTableSpecList</a>

---

##### `gcs_fileset_spec`<sup>Required</sup> <a name="gcs_fileset_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpec"></a>

```python
gcs_fileset_spec: DataCatalogEntryGcsFilesetSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference">DataCatalogEntryGcsFilesetSpecOutputReference</a>

---

##### `integrated_system`<sup>Required</sup> <a name="integrated_system" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.integratedSystem"></a>

```python
integrated_system: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeouts"></a>

```python
timeouts: DataCatalogEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference">DataCatalogEntryTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `entry_group_input`<sup>Optional</sup> <a name="entry_group_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroupInput"></a>

```python
entry_group_input: str
```

- *Type:* str

---

##### `entry_id_input`<sup>Optional</sup> <a name="entry_id_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryIdInput"></a>

```python
entry_id_input: str
```

- *Type:* str

---

##### `gcs_fileset_spec_input`<sup>Optional</sup> <a name="gcs_fileset_spec_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.gcsFilesetSpecInput"></a>

```python
gcs_fileset_spec_input: DataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `linked_resource_input`<sup>Optional</sup> <a name="linked_resource_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResourceInput"></a>

```python
linked_resource_input: str
```

- *Type:* str

---

##### `schema_input`<sup>Optional</sup> <a name="schema_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schemaInput"></a>

```python
schema_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataCatalogEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `user_specified_system_input`<sup>Optional</sup> <a name="user_specified_system_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystemInput"></a>

```python
user_specified_system_input: str
```

- *Type:* str

---

##### `user_specified_type_input`<sup>Optional</sup> <a name="user_specified_type_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedTypeInput"></a>

```python
user_specified_type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryGroup"></a>

```python
entry_group: str
```

- *Type:* str

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `linked_resource`<sup>Required</sup> <a name="linked_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.linkedResource"></a>

```python
linked_resource: str
```

- *Type:* str

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.schema"></a>

```python
schema: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `user_specified_system`<sup>Required</sup> <a name="user_specified_system" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedSystem"></a>

```python
user_specified_system: str
```

- *Type:* str

---

##### `user_specified_type`<sup>Required</sup> <a name="user_specified_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.userSpecifiedType"></a>

```python
user_specified_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogEntryBigqueryDateShardedSpec <a name="DataCatalogEntryBigqueryDateShardedSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec()
```


### DataCatalogEntryBigqueryTableSpec <a name="DataCatalogEntryBigqueryTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpec()
```


### DataCatalogEntryBigqueryTableSpecTableSpec <a name="DataCatalogEntryBigqueryTableSpecTableSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec()
```


### DataCatalogEntryBigqueryTableSpecViewSpec <a name="DataCatalogEntryBigqueryTableSpecViewSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec()
```


### DataCatalogEntryConfig <a name="DataCatalogEntryConfig" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  entry_group: str,
  entry_id: str,
  description: str = None,
  display_name: str = None,
  gcs_fileset_spec: DataCatalogEntryGcsFilesetSpec = None,
  id: str = None,
  linked_resource: str = None,
  schema: str = None,
  timeouts: DataCatalogEntryTimeouts = None,
  type: str = None,
  user_specified_system: str = None,
  user_specified_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryGroup">entry_group</a></code> | <code>str</code> | The name of the entry group this entry is in. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryId">entry_id</a></code> | <code>str</code> | The id of the entry to create. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.description">description</a></code> | <code>str</code> | Entry description, which can consist of several sentences or paragraphs that describe entry contents. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.displayName">display_name</a></code> | <code>str</code> | Display information such as title and description. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.gcsFilesetSpec">gcs_fileset_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | gcs_fileset_spec block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#id DataCatalogEntry#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.linkedResource">linked_resource</a></code> | <code>str</code> | The resource this metadata entry refers to. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.schema">schema</a></code> | <code>str</code> | Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.type">type</a></code> | <code>str</code> | The type of the entry. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedSystem">user_specified_system</a></code> | <code>str</code> | This field indicates the entry's source system that Data Catalog does not integrate with. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedType">user_specified_type</a></code> | <code>str</code> | Entry type if it does not fit any of the input-allowed values listed in EntryType enum above. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `entry_group`<sup>Required</sup> <a name="entry_group" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryGroup"></a>

```python
entry_group: str
```

- *Type:* str

The name of the entry group this entry is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#entry_group DataCatalogEntry#entry_group}

---

##### `entry_id`<sup>Required</sup> <a name="entry_id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.entryId"></a>

```python
entry_id: str
```

- *Type:* str

The id of the entry to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#entry_id DataCatalogEntry#entry_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Entry description, which can consist of several sentences or paragraphs that describe entry contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#description DataCatalogEntry#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display information such as title and description.

A short name to identify the entry,
for example, "Analytics Data - Jan 2011".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#display_name DataCatalogEntry#display_name}

---

##### `gcs_fileset_spec`<sup>Optional</sup> <a name="gcs_fileset_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.gcsFilesetSpec"></a>

```python
gcs_fileset_spec: DataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

gcs_fileset_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#gcs_fileset_spec DataCatalogEntry#gcs_fileset_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#id DataCatalogEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `linked_resource`<sup>Optional</sup> <a name="linked_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.linkedResource"></a>

```python
linked_resource: str
```

- *Type:* str

The resource this metadata entry refers to.

For Google Cloud Platform resources, linkedResource is the full name of the resource.
For example, the linkedResource for a table resource from BigQuery is:
//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
this field is optional and defaults to an empty string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#linked_resource DataCatalogEntry#linked_resource}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.schema"></a>

```python
schema: str
```

- *Type:* str

Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema attached to it. See https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema for what fields this schema can contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#schema DataCatalogEntry#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.timeouts"></a>

```python
timeouts: DataCatalogEntryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#timeouts DataCatalogEntry#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The type of the entry.

Only used for Entries with types in the EntryType enum.
Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#type DataCatalogEntry#type}

---

##### `user_specified_system`<sup>Optional</sup> <a name="user_specified_system" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedSystem"></a>

```python
user_specified_system: str
```

- *Type:* str

This field indicates the entry's source system that Data Catalog does not integrate with.

userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#user_specified_system DataCatalogEntry#user_specified_system}

---

##### `user_specified_type`<sup>Optional</sup> <a name="user_specified_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryConfig.property.userSpecifiedType"></a>

```python
user_specified_type: str
```

- *Type:* str

Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.

When creating an entry, users should check the enum values first, if nothing matches the entry
to be created, then provide a custom value, for example "my_special_type".
userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#user_specified_type DataCatalogEntry#user_specified_type}

---

### DataCatalogEntryGcsFilesetSpec <a name="DataCatalogEntryGcsFilesetSpec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryGcsFilesetSpec(
  file_patterns: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.property.filePatterns">file_patterns</a></code> | <code>typing.List[str]</code> | Patterns to identify a set of files in Google Cloud Storage. |

---

##### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec.property.filePatterns"></a>

```python
file_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Patterns to identify a set of files in Google Cloud Storage.

See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:

* gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
* gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
* gs://bucket_name/file*: matches files prefixed by file in bucket_name
* gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
* gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
* gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
* gs://bucket_name/a/* /b: matches all files in bucket_name that match a/* /b pattern, such as a/c/b, a/d/b
* gs://another_bucket/a.txt: matches gs://another_bucket/a.txt

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#file_patterns DataCatalogEntry#file_patterns}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs()
```


### DataCatalogEntryTimeouts <a name="DataCatalogEntryTimeouts" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#create DataCatalogEntry#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#delete DataCatalogEntry#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#update DataCatalogEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#create DataCatalogEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#delete DataCatalogEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/data_catalog_entry#update DataCatalogEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogEntryBigqueryDateShardedSpecList <a name="DataCatalogEntryBigqueryDateShardedSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCatalogEntryBigqueryDateShardedSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCatalogEntryBigqueryDateShardedSpecOutputReference <a name="DataCatalogEntryBigqueryDateShardedSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset">dataset</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount">shard_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix">table_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec">DataCatalogEntryBigqueryDateShardedSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.dataset"></a>

```python
dataset: str
```

- *Type:* str

---

##### `shard_count`<sup>Required</sup> <a name="shard_count" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.shardCount"></a>

```python
shard_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `table_prefix`<sup>Required</sup> <a name="table_prefix" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.tablePrefix"></a>

```python
table_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogEntryBigqueryDateShardedSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryDateShardedSpec">DataCatalogEntryBigqueryDateShardedSpec</a>

---


### DataCatalogEntryBigqueryTableSpecList <a name="DataCatalogEntryBigqueryTableSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCatalogEntryBigqueryTableSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCatalogEntryBigqueryTableSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType">table_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec">table_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList">DataCatalogEntryBigqueryTableSpecTableSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec">view_spec</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList">DataCatalogEntryBigqueryTableSpecViewSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec">DataCatalogEntryBigqueryTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `table_source_type`<sup>Required</sup> <a name="table_source_type" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSourceType"></a>

```python
table_source_type: str
```

- *Type:* str

---

##### `table_spec`<sup>Required</sup> <a name="table_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.tableSpec"></a>

```python
table_spec: DataCatalogEntryBigqueryTableSpecTableSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList">DataCatalogEntryBigqueryTableSpecTableSpecList</a>

---

##### `view_spec`<sup>Required</sup> <a name="view_spec" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.viewSpec"></a>

```python
view_spec: DataCatalogEntryBigqueryTableSpecViewSpecList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList">DataCatalogEntryBigqueryTableSpecViewSpecList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogEntryBigqueryTableSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpec">DataCatalogEntryBigqueryTableSpec</a>

---


### DataCatalogEntryBigqueryTableSpecTableSpecList <a name="DataCatalogEntryBigqueryTableSpecTableSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCatalogEntryBigqueryTableSpecTableSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCatalogEntryBigqueryTableSpecTableSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecTableSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry">grouped_entry</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec">DataCatalogEntryBigqueryTableSpecTableSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grouped_entry`<sup>Required</sup> <a name="grouped_entry" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.groupedEntry"></a>

```python
grouped_entry: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogEntryBigqueryTableSpecTableSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecTableSpec">DataCatalogEntryBigqueryTableSpecTableSpec</a>

---


### DataCatalogEntryBigqueryTableSpecViewSpecList <a name="DataCatalogEntryBigqueryTableSpecViewSpecList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCatalogEntryBigqueryTableSpecViewSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCatalogEntryBigqueryTableSpecViewSpecOutputReference <a name="DataCatalogEntryBigqueryTableSpecViewSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery">view_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec">DataCatalogEntryBigqueryTableSpecViewSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `view_query`<sup>Required</sup> <a name="view_query" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.viewQuery"></a>

```python
view_query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogEntryBigqueryTableSpecViewSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryBigqueryTableSpecViewSpec">DataCatalogEntryBigqueryTableSpecViewSpec</a>

---


### DataCatalogEntryGcsFilesetSpecOutputReference <a name="DataCatalogEntryGcsFilesetSpecOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs">sample_gcs_file_specs</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput">file_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns">file_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `sample_gcs_file_specs`<sup>Required</sup> <a name="sample_gcs_file_specs" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.sampleGcsFileSpecs"></a>

```python
sample_gcs_file_specs: DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList</a>

---

##### `file_patterns_input`<sup>Optional</sup> <a name="file_patterns_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatternsInput"></a>

```python
file_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `file_patterns`<sup>Required</sup> <a name="file_patterns" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.filePatterns"></a>

```python
file_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogEntryGcsFilesetSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpec">DataCatalogEntryGcsFilesetSpec</a>

---


### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference <a name="DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath">file_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes">size_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `file_path`<sup>Required</sup> <a name="file_path" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.filePath"></a>

```python
file_path: str
```

- *Type:* str

---

##### `size_bytes`<sup>Required</sup> <a name="size_bytes" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.sizeBytes"></a>

```python
size_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference.property.internalValue"></a>

```python
internal_value: DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs">DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs</a>

---


### DataCatalogEntryTimeoutsOutputReference <a name="DataCatalogEntryTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_entry

dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCatalogEntryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogEntry.DataCatalogEntryTimeouts">DataCatalogEntryTimeouts</a>]

---



