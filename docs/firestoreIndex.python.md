# `firestoreIndex` Submodule <a name="`firestoreIndex` Submodule" id="@cdktf/provider-google.firestoreIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreIndex <a name="FirestoreIndex" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index google_firestore_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndex(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection: str,
  fields: typing.Union[IResolvable, typing.List[FirestoreIndexFields]],
  api_scope: str = None,
  database: str = None,
  density: str = None,
  id: str = None,
  multikey: typing.Union[bool, IResolvable] = None,
  project: str = None,
  query_scope: str = None,
  timeouts: FirestoreIndexTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.collection">collection</a></code> | <code>str</code> | The collection being indexed. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.fields">fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]</code> | fields block. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.apiScope">api_scope</a></code> | <code>str</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.density">density</a></code> | <code>str</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#id FirestoreIndex#id}. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.multikey">multikey</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#project FirestoreIndex#project}. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.queryScope">query_scope</a></code> | <code>str</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.collection"></a>

- *Type:* str

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#collection FirestoreIndex#collection}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.fields"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#fields FirestoreIndex#fields}

---

##### `api_scope`<sup>Optional</sup> <a name="api_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.apiScope"></a>

- *Type:* str

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#api_scope FirestoreIndex#api_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.database"></a>

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#database FirestoreIndex#database}

---

##### `density`<sup>Optional</sup> <a name="density" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.density"></a>

- *Type:* str

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#density FirestoreIndex#density}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#id FirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multikey`<sup>Optional</sup> <a name="multikey" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.multikey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#multikey FirestoreIndex#multikey}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#project FirestoreIndex#project}.

---

##### `query_scope`<sup>Optional</sup> <a name="query_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.queryScope"></a>

- *Type:* str

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#query_scope FirestoreIndex#query_scope}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#timeouts FirestoreIndex#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.putFields">put_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetApiScope">reset_api_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetDensity">reset_density</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetMultikey">reset_multikey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetQueryScope">reset_query_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_fields` <a name="put_fields" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.putFields"></a>

```python
def put_fields(
  value: typing.Union[IResolvable, typing.List[FirestoreIndexFields]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.putFields.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#create FirestoreIndex#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#delete FirestoreIndex#delete}.

---

##### `reset_api_scope` <a name="reset_api_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetApiScope"></a>

```python
def reset_api_scope() -> None
```

##### `reset_database` <a name="reset_database" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_density` <a name="reset_density" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetDensity"></a>

```python
def reset_density() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_multikey` <a name="reset_multikey" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetMultikey"></a>

```python
def reset_multikey() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_query_scope` <a name="reset_query_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetQueryScope"></a>

```python
def reset_query_scope() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirestoreIndex resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndex.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndex.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndex.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndex.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirestoreIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirestoreIndex to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirestoreIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.fields">fields</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList">FirestoreIndexFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference">FirestoreIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.apiScopeInput">api_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.collectionInput">collection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.densityInput">density_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.fieldsInput">fields_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.multikeyInput">multikey_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.queryScopeInput">query_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.apiScope">api_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.collection">collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.density">density</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.multikey">multikey</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.queryScope">query_scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.fields"></a>

```python
fields: FirestoreIndexFieldsList
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList">FirestoreIndexFieldsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.timeouts"></a>

```python
timeouts: FirestoreIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference">FirestoreIndexTimeoutsOutputReference</a>

---

##### `api_scope_input`<sup>Optional</sup> <a name="api_scope_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.apiScopeInput"></a>

```python
api_scope_input: str
```

- *Type:* str

---

##### `collection_input`<sup>Optional</sup> <a name="collection_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.collectionInput"></a>

```python
collection_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `density_input`<sup>Optional</sup> <a name="density_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.densityInput"></a>

```python
density_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.fieldsInput"></a>

```python
fields_input: typing.Union[IResolvable, typing.List[FirestoreIndexFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `multikey_input`<sup>Optional</sup> <a name="multikey_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.multikeyInput"></a>

```python
multikey_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `query_scope_input`<sup>Optional</sup> <a name="query_scope_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.queryScopeInput"></a>

```python
query_scope_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirestoreIndexTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>]

---

##### `api_scope`<sup>Required</sup> <a name="api_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.apiScope"></a>

```python
api_scope: str
```

- *Type:* str

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.collection"></a>

```python
collection: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `density`<sup>Required</sup> <a name="density" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.density"></a>

```python
density: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multikey`<sup>Required</sup> <a name="multikey" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.multikey"></a>

```python
multikey: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `query_scope`<sup>Required</sup> <a name="query_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.queryScope"></a>

```python
query_scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firestoreIndex.FirestoreIndex.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreIndexConfig <a name="FirestoreIndexConfig" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection: str,
  fields: typing.Union[IResolvable, typing.List[FirestoreIndexFields]],
  api_scope: str = None,
  database: str = None,
  density: str = None,
  id: str = None,
  multikey: typing.Union[bool, IResolvable] = None,
  project: str = None,
  query_scope: str = None,
  timeouts: FirestoreIndexTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.collection">collection</a></code> | <code>str</code> | The collection being indexed. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.fields">fields</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]</code> | fields block. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.apiScope">api_scope</a></code> | <code>str</code> | The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.density">density</a></code> | <code>str</code> | The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#id FirestoreIndex#id}. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.multikey">multikey</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#project FirestoreIndex#project}. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.queryScope">query_scope</a></code> | <code>str</code> | The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.collection"></a>

```python
collection: str
```

- *Type:* str

The collection being indexed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#collection FirestoreIndex#collection}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.fields"></a>

```python
fields: typing.Union[IResolvable, typing.List[FirestoreIndexFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#fields FirestoreIndex#fields}

---

##### `api_scope`<sup>Optional</sup> <a name="api_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.apiScope"></a>

```python
api_scope: str
```

- *Type:* str

The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#api_scope FirestoreIndex#api_scope}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#database FirestoreIndex#database}

---

##### `density`<sup>Optional</sup> <a name="density" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.density"></a>

```python
density: str
```

- *Type:* str

The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#density FirestoreIndex#density}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#id FirestoreIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `multikey`<sup>Optional</sup> <a name="multikey" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.multikey"></a>

```python
multikey: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#multikey FirestoreIndex#multikey}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#project FirestoreIndex#project}.

---

##### `query_scope`<sup>Optional</sup> <a name="query_scope" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.queryScope"></a>

```python
query_scope: str
```

- *Type:* str

The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#query_scope FirestoreIndex#query_scope}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexConfig.property.timeouts"></a>

```python
timeouts: FirestoreIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#timeouts FirestoreIndex#timeouts}

---

### FirestoreIndexFields <a name="FirestoreIndexFields" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFields(
  array_config: str = None,
  field_path: str = None,
  order: str = None,
  vector_config: FirestoreIndexFieldsVectorConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.arrayConfig">array_config</a></code> | <code>str</code> | Indicates that this field supports operations on arrayValues. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.fieldPath">field_path</a></code> | <code>str</code> | Name of the field. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.order">order</a></code> | <code>str</code> | Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.vectorConfig">vector_config</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | vector_config block. |

---

##### `array_config`<sup>Optional</sup> <a name="array_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.arrayConfig"></a>

```python
array_config: str
```

- *Type:* str

Indicates that this field supports operations on arrayValues.

Only one of 'order', 'arrayConfig', and
'vectorConfig' can be specified. Possible values: ["CONTAINS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#array_config FirestoreIndex#array_config}

---

##### `field_path`<sup>Optional</sup> <a name="field_path" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

Name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#field_path FirestoreIndex#field_path}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.order"></a>

```python
order: str
```

- *Type:* str

Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.

Only one of 'order', 'arrayConfig', and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#order FirestoreIndex#order}

---

##### `vector_config`<sup>Optional</sup> <a name="vector_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFields.property.vectorConfig"></a>

```python
vector_config: FirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

vector_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#vector_config FirestoreIndex#vector_config}

---

### FirestoreIndexFieldsVectorConfig <a name="FirestoreIndexFieldsVectorConfig" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFieldsVectorConfig(
  dimension: typing.Union[int, float] = None,
  flat: FirestoreIndexFieldsVectorConfigFlat = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.dimension">dimension</a></code> | <code>typing.Union[int, float]</code> | The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.flat">flat</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | flat block. |

---

##### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.dimension"></a>

```python
dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#dimension FirestoreIndex#dimension}

---

##### `flat`<sup>Optional</sup> <a name="flat" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig.property.flat"></a>

```python
flat: FirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#flat FirestoreIndex#flat}

---

### FirestoreIndexFieldsVectorConfigFlat <a name="FirestoreIndexFieldsVectorConfigFlat" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFieldsVectorConfigFlat()
```


### FirestoreIndexTimeouts <a name="FirestoreIndexTimeouts" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#create FirestoreIndex#create}. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#delete FirestoreIndex#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#create FirestoreIndex#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#delete FirestoreIndex#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreIndexFieldsList <a name="FirestoreIndexFieldsList" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFieldsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FirestoreIndexFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FirestoreIndexFields]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]]

---


### FirestoreIndexFieldsOutputReference <a name="FirestoreIndexFieldsOutputReference" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFieldsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig">put_vector_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetArrayConfig">reset_array_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetFieldPath">reset_field_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetOrder">reset_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetVectorConfig">reset_vector_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_vector_config` <a name="put_vector_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig"></a>

```python
def put_vector_config(
  dimension: typing.Union[int, float] = None,
  flat: FirestoreIndexFieldsVectorConfigFlat = None
) -> None
```

###### `dimension`<sup>Optional</sup> <a name="dimension" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig.parameter.dimension"></a>

- *Type:* typing.Union[int, float]

The resulting index will only include vectors of this dimension, and can be used for vector search with the same dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#dimension FirestoreIndex#dimension}

---

###### `flat`<sup>Optional</sup> <a name="flat" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.putVectorConfig.parameter.flat"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

flat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/firestore_index#flat FirestoreIndex#flat}

---

##### `reset_array_config` <a name="reset_array_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetArrayConfig"></a>

```python
def reset_array_config() -> None
```

##### `reset_field_path` <a name="reset_field_path" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetFieldPath"></a>

```python
def reset_field_path() -> None
```

##### `reset_order` <a name="reset_order" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetOrder"></a>

```python
def reset_order() -> None
```

##### `reset_vector_config` <a name="reset_vector_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.resetVectorConfig"></a>

```python
def reset_vector_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfig">vector_config</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference">FirestoreIndexFieldsVectorConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfigInput">array_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.orderInput">order_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfigInput">vector_config_input</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfig">array_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.order">order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vector_config`<sup>Required</sup> <a name="vector_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfig"></a>

```python
vector_config: FirestoreIndexFieldsVectorConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference">FirestoreIndexFieldsVectorConfigOutputReference</a>

---

##### `array_config_input`<sup>Optional</sup> <a name="array_config_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfigInput"></a>

```python
array_config_input: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `order_input`<sup>Optional</sup> <a name="order_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.orderInput"></a>

```python
order_input: str
```

- *Type:* str

---

##### `vector_config_input`<sup>Optional</sup> <a name="vector_config_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.vectorConfigInput"></a>

```python
vector_config_input: FirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---

##### `array_config`<sup>Required</sup> <a name="array_config" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.arrayConfig"></a>

```python
array_config: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.order"></a>

```python
order: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirestoreIndexFields]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFields">FirestoreIndexFields</a>]

---


### FirestoreIndexFieldsVectorConfigFlatOutputReference <a name="FirestoreIndexFieldsVectorConfigFlatOutputReference" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference.property.internalValue"></a>

```python
internal_value: FirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---


### FirestoreIndexFieldsVectorConfigOutputReference <a name="FirestoreIndexFieldsVectorConfigOutputReference" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat">put_flat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetDimension">reset_dimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetFlat">reset_flat</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_flat` <a name="put_flat" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.putFlat"></a>

```python
def put_flat() -> None
```

##### `reset_dimension` <a name="reset_dimension" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetDimension"></a>

```python
def reset_dimension() -> None
```

##### `reset_flat` <a name="reset_flat" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.resetFlat"></a>

```python
def reset_flat() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flat">flat</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference">FirestoreIndexFieldsVectorConfigFlatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput">dimension_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flatInput">flat_input</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimension">dimension</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `flat`<sup>Required</sup> <a name="flat" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flat"></a>

```python
flat: FirestoreIndexFieldsVectorConfigFlatOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlatOutputReference">FirestoreIndexFieldsVectorConfigFlatOutputReference</a>

---

##### `dimension_input`<sup>Optional</sup> <a name="dimension_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimensionInput"></a>

```python
dimension_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `flat_input`<sup>Optional</sup> <a name="flat_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.flatInput"></a>

```python
flat_input: FirestoreIndexFieldsVectorConfigFlat
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigFlat">FirestoreIndexFieldsVectorConfigFlat</a>

---

##### `dimension`<sup>Required</sup> <a name="dimension" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.dimension"></a>

```python
dimension: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfigOutputReference.property.internalValue"></a>

```python
internal_value: FirestoreIndexFieldsVectorConfig
```

- *Type:* <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexFieldsVectorConfig">FirestoreIndexFieldsVectorConfig</a>

---


### FirestoreIndexTimeoutsOutputReference <a name="FirestoreIndexTimeoutsOutputReference" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_index

firestoreIndex.FirestoreIndexTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirestoreIndexTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreIndex.FirestoreIndexTimeouts">FirestoreIndexTimeouts</a>]

---



