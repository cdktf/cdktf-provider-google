# `dataCatalogTag` Submodule <a name="`dataCatalogTag` Submodule" id="@cdktf/provider-google.dataCatalogTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCatalogTag <a name="DataCatalogTag" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag google_data_catalog_tag}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTag(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fields: typing.Union[IResolvable, typing.List[DataCatalogTagFields]],
  template: str,
  column: str = None,
  id: str = None,
  parent: str = None,
  timeouts: DataCatalogTagTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.fields">fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]</code> | fields block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.template">template</a></code> | <code>str</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.column">column</a></code> | <code>str</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#id DataCatalogTag#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.fields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#fields DataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.template"></a>

- *Type:* str

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#template DataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.column"></a>

- *Type:* str

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#column DataCatalogTag#column}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#id DataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.parent"></a>

- *Type:* str

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#parent DataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#timeouts DataCatalogTag#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetColumn">reset_column</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fields` <a name="put_fields" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putFields"></a>

```python
def put_fields(
  value: typing.Union[IResolvable, typing.List[DataCatalogTagFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#create DataCatalogTag#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#delete DataCatalogTag#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#update DataCatalogTag#update}.

---

##### `reset_column` <a name="reset_column" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetColumn"></a>

```python
def reset_column() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataCatalogTag resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTag.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTag.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTag.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTag.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataCatalogTag resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataCatalogTag to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataCatalogTag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataCatalogTag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList">DataCatalogTagFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.templateDisplayname">template_displayname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference">DataCatalogTagTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.columnInput">column_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.fieldsInput">fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.templateInput">template_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.template">template</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.fields"></a>

```python
fields: DataCatalogTagFieldsList
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList">DataCatalogTagFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `template_displayname`<sup>Required</sup> <a name="template_displayname" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.templateDisplayname"></a>

```python
template_displayname: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.timeouts"></a>

```python
timeouts: DataCatalogTagTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference">DataCatalogTagTimeoutsOutputReference</a>

---

##### `column_input`<sup>Optional</sup> <a name="column_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.columnInput"></a>

```python
column_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.fieldsInput"></a>

```python
fields_input: typing.Union[IResolvable, typing.List[DataCatalogTagFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `template_input`<sup>Optional</sup> <a name="template_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.templateInput"></a>

```python
template_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataCatalogTagTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a>]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.template"></a>

```python
template: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTag.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataCatalogTagConfig <a name="DataCatalogTagConfig" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTagConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fields: typing.Union[IResolvable, typing.List[DataCatalogTagFields]],
  template: str,
  column: str = None,
  id: str = None,
  parent: str = None,
  timeouts: DataCatalogTagTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.fields">fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]</code> | fields block. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.template">template</a></code> | <code>str</code> | The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.column">column</a></code> | <code>str</code> | Resources like Entry can have schemas associated with them. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#id DataCatalogTag#id}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.parent">parent</a></code> | <code>str</code> | The name of the parent this tag is attached to. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.fields"></a>

```python
fields: typing.Union[IResolvable, typing.List[DataCatalogTagFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#fields DataCatalogTag#fields}

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.template"></a>

```python
template: str
```

- *Type:* str

The resource name of the tag template that this tag uses. Example: projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId} This field cannot be modified after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#template DataCatalogTag#template}

---

##### `column`<sup>Optional</sup> <a name="column" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.column"></a>

```python
column: str
```

- *Type:* str

Resources like Entry can have schemas associated with them.

This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#column DataCatalogTag#column}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#id DataCatalogTag#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The name of the parent this tag is attached to.

This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#parent DataCatalogTag#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagConfig.property.timeouts"></a>

```python
timeouts: DataCatalogTagTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#timeouts DataCatalogTag#timeouts}

---

### DataCatalogTagFields <a name="DataCatalogTagFields" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTagFields(
  field_name: str,
  bool_value: typing.Union[bool, IResolvable] = None,
  double_value: typing.Union[int, float] = None,
  enum_value: str = None,
  string_value: str = None,
  timestamp_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.fieldName">field_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#field_name DataCatalogTag#field_name}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Holds the value for a tag field with boolean type. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | Holds the value for a tag field with double type. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.enumValue">enum_value</a></code> | <code>str</code> | The display name of the enum value. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.stringValue">string_value</a></code> | <code>str</code> | Holds the value for a tag field with string type. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.timestampValue">timestamp_value</a></code> | <code>str</code> | Holds the value for a tag field with timestamp type. |

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#field_name DataCatalogTag#field_name}.

---

##### `bool_value`<sup>Optional</sup> <a name="bool_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Holds the value for a tag field with boolean type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#bool_value DataCatalogTag#bool_value}

---

##### `double_value`<sup>Optional</sup> <a name="double_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Holds the value for a tag field with double type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#double_value DataCatalogTag#double_value}

---

##### `enum_value`<sup>Optional</sup> <a name="enum_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.enumValue"></a>

```python
enum_value: str
```

- *Type:* str

The display name of the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#enum_value DataCatalogTag#enum_value}

---

##### `string_value`<sup>Optional</sup> <a name="string_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

Holds the value for a tag field with string type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#string_value DataCatalogTag#string_value}

---

##### `timestamp_value`<sup>Optional</sup> <a name="timestamp_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields.property.timestampValue"></a>

```python
timestamp_value: str
```

- *Type:* str

Holds the value for a tag field with timestamp type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#timestamp_value DataCatalogTag#timestamp_value}

---

### DataCatalogTagTimeouts <a name="DataCatalogTagTimeouts" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTagTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#create DataCatalogTag#create}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#delete DataCatalogTag#delete}. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#update DataCatalogTag#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#create DataCatalogTag#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#delete DataCatalogTag#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/resources/data_catalog_tag#update DataCatalogTag#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataCatalogTagFieldsList <a name="DataCatalogTagFieldsList" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTagFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataCatalogTagFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataCatalogTagFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]]

---


### DataCatalogTagFieldsOutputReference <a name="DataCatalogTagFieldsOutputReference" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTagFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetBoolValue">reset_bool_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetDoubleValue">reset_double_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetEnumValue">reset_enum_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetStringValue">reset_string_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetTimestampValue">reset_timestamp_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bool_value` <a name="reset_bool_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetBoolValue"></a>

```python
def reset_bool_value() -> None
```

##### `reset_double_value` <a name="reset_double_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetDoubleValue"></a>

```python
def reset_double_value() -> None
```

##### `reset_enum_value` <a name="reset_enum_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetEnumValue"></a>

```python
def reset_enum_value() -> None
```

##### `reset_string_value` <a name="reset_string_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetStringValue"></a>

```python
def reset_string_value() -> None
```

##### `reset_timestamp_value` <a name="reset_timestamp_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.resetTimestampValue"></a>

```python
def reset_timestamp_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.boolValueInput">bool_value_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.doubleValueInput">double_value_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.enumValueInput">enum_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.fieldNameInput">field_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.stringValueInput">string_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.timestampValueInput">timestamp_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.boolValue">bool_value</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.doubleValue">double_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.enumValue">enum_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.fieldName">field_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.stringValue">string_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.timestampValue">timestamp_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bool_value_input`<sup>Optional</sup> <a name="bool_value_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.boolValueInput"></a>

```python
bool_value_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value_input`<sup>Optional</sup> <a name="double_value_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.doubleValueInput"></a>

```python
double_value_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum_value_input`<sup>Optional</sup> <a name="enum_value_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.enumValueInput"></a>

```python
enum_value_input: str
```

- *Type:* str

---

##### `field_name_input`<sup>Optional</sup> <a name="field_name_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.fieldNameInput"></a>

```python
field_name_input: str
```

- *Type:* str

---

##### `string_value_input`<sup>Optional</sup> <a name="string_value_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.stringValueInput"></a>

```python
string_value_input: str
```

- *Type:* str

---

##### `timestamp_value_input`<sup>Optional</sup> <a name="timestamp_value_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.timestampValueInput"></a>

```python
timestamp_value_input: str
```

- *Type:* str

---

##### `bool_value`<sup>Required</sup> <a name="bool_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.boolValue"></a>

```python
bool_value: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `double_value`<sup>Required</sup> <a name="double_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.doubleValue"></a>

```python
double_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enum_value`<sup>Required</sup> <a name="enum_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.enumValue"></a>

```python
enum_value: str
```

- *Type:* str

---

##### `field_name`<sup>Required</sup> <a name="field_name" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.fieldName"></a>

```python
field_name: str
```

- *Type:* str

---

##### `string_value`<sup>Required</sup> <a name="string_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.stringValue"></a>

```python
string_value: str
```

- *Type:* str

---

##### `timestamp_value`<sup>Required</sup> <a name="timestamp_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.timestampValue"></a>

```python
timestamp_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCatalogTagFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagFields">DataCatalogTagFields</a>]

---


### DataCatalogTagTimeoutsOutputReference <a name="DataCatalogTagTimeoutsOutputReference" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import data_catalog_tag

dataCatalogTag.DataCatalogTagTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataCatalogTagTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.dataCatalogTag.DataCatalogTagTimeouts">DataCatalogTagTimeouts</a>]

---



