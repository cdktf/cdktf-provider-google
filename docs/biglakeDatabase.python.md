# `biglakeDatabase` Submodule <a name="`biglakeDatabase` Submodule" id="@cdktf/provider-google.biglakeDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeDatabase <a name="BiglakeDatabase" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database google_biglake_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog: str,
  hive_options: BiglakeDatabaseHiveOptions,
  name: str,
  type: str,
  id: str = None,
  timeouts: BiglakeDatabaseTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | The parent catalog. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.hiveOptions">hive_options</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the database. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.type">type</a></code> | <code>str</code> | The database type. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#id BiglakeDatabase#id}. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.catalog"></a>

- *Type:* str

The parent catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#catalog BiglakeDatabase#catalog}

---

##### `hive_options`<sup>Required</sup> <a name="hive_options" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.hiveOptions"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#hive_options BiglakeDatabase#hive_options}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.name"></a>

- *Type:* str

The name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#name BiglakeDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.type"></a>

- *Type:* str

The database type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#type BiglakeDatabase#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#id BiglakeDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#timeouts BiglakeDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putHiveOptions">put_hive_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_hive_options` <a name="put_hive_options" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putHiveOptions"></a>

```python
def put_hive_options(
  location_uri: str = None,
  parameters: typing.Mapping[str] = None
) -> None
```

###### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putHiveOptions.parameter.locationUri"></a>

- *Type:* str

Cloud Storage folder URI where the database data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#location_uri BiglakeDatabase#location_uri}

---

###### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putHiveOptions.parameter.parameters"></a>

- *Type:* typing.Mapping[str]

Stores user supplied Hive database parameters.

An object containing a
list of"key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#parameters BiglakeDatabase#parameters}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#create BiglakeDatabase#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#delete BiglakeDatabase#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#update BiglakeDatabase#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BiglakeDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabase.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BiglakeDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BiglakeDatabase to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BiglakeDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BiglakeDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.hiveOptions">hive_options</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference">BiglakeDatabaseHiveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference">BiglakeDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.hiveOptionsInput">hive_options_input</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `hive_options`<sup>Required</sup> <a name="hive_options" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.hiveOptions"></a>

```python
hive_options: BiglakeDatabaseHiveOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference">BiglakeDatabaseHiveOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.timeouts"></a>

```python
timeouts: BiglakeDatabaseTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference">BiglakeDatabaseTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `hive_options_input`<sup>Optional</sup> <a name="hive_options_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.hiveOptionsInput"></a>

```python
hive_options_input: BiglakeDatabaseHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BiglakeDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeDatabaseConfig <a name="BiglakeDatabaseConfig" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  catalog: str,
  hive_options: BiglakeDatabaseHiveOptions,
  name: str,
  type: str,
  id: str = None,
  timeouts: BiglakeDatabaseTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.catalog">catalog</a></code> | <code>str</code> | The parent catalog. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.hiveOptions">hive_options</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a></code> | hive_options block. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.name">name</a></code> | <code>str</code> | The name of the database. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.type">type</a></code> | <code>str</code> | The database type. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#id BiglakeDatabase#id}. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

The parent catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#catalog BiglakeDatabase#catalog}

---

##### `hive_options`<sup>Required</sup> <a name="hive_options" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.hiveOptions"></a>

```python
hive_options: BiglakeDatabaseHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a>

hive_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#hive_options BiglakeDatabase#hive_options}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#name BiglakeDatabase#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.type"></a>

```python
type: str
```

- *Type:* str

The database type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#type BiglakeDatabase#type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#id BiglakeDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseConfig.property.timeouts"></a>

```python
timeouts: BiglakeDatabaseTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#timeouts BiglakeDatabase#timeouts}

---

### BiglakeDatabaseHiveOptions <a name="BiglakeDatabaseHiveOptions" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabaseHiveOptions(
  location_uri: str = None,
  parameters: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions.property.locationUri">location_uri</a></code> | <code>str</code> | Cloud Storage folder URI where the database data is stored, starting with "gs://". |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | Stores user supplied Hive database parameters. |

---

##### `location_uri`<sup>Optional</sup> <a name="location_uri" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

Cloud Storage folder URI where the database data is stored, starting with "gs://".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#location_uri BiglakeDatabase#location_uri}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Stores user supplied Hive database parameters.

An object containing a
list of"key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#parameters BiglakeDatabase#parameters}

---

### BiglakeDatabaseTimeouts <a name="BiglakeDatabaseTimeouts" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabaseTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#create BiglakeDatabase#create}. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#delete BiglakeDatabase#delete}. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#update BiglakeDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#create BiglakeDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#delete BiglakeDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/biglake_database#update BiglakeDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeDatabaseHiveOptionsOutputReference <a name="BiglakeDatabaseHiveOptionsOutputReference" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resetLocationUri">reset_location_uri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resetParameters">reset_parameters</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_location_uri` <a name="reset_location_uri" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resetLocationUri"></a>

```python
def reset_location_uri() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.resetParameters"></a>

```python
def reset_parameters() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.locationUriInput">location_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.parametersInput">parameters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.locationUri">location_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.parameters">parameters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `location_uri_input`<sup>Optional</sup> <a name="location_uri_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.locationUriInput"></a>

```python
location_uri_input: str
```

- *Type:* str

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.parametersInput"></a>

```python
parameters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_uri`<sup>Required</sup> <a name="location_uri" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.locationUri"></a>

```python
location_uri: str
```

- *Type:* str

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.parameters"></a>

```python
parameters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: BiglakeDatabaseHiveOptions
```

- *Type:* <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseHiveOptions">BiglakeDatabaseHiveOptions</a>

---


### BiglakeDatabaseTimeoutsOutputReference <a name="BiglakeDatabaseTimeoutsOutputReference" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import biglake_database

biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BiglakeDatabaseTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.biglakeDatabase.BiglakeDatabaseTimeouts">BiglakeDatabaseTimeouts</a>]

---



