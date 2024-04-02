# `firestoreDocument` Submodule <a name="`firestoreDocument` Submodule" id="@cdktf/provider-google.firestoreDocument"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirestoreDocument <a name="FirestoreDocument" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document google_firestore_document}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocument(
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
  document_id: str,
  fields: str,
  database: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirestoreDocumentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.collection">collection</a></code> | <code>str</code> | The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.documentId">document_id</a></code> | <code>str</code> | The client-assigned document ID to use for this document during creation. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.fields">fields</a></code> | <code>str</code> | The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#id FirestoreDocument#id}. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#project FirestoreDocument#project}. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.collection"></a>

- *Type:* str

The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#collection FirestoreDocument#collection}

---

##### `document_id`<sup>Required</sup> <a name="document_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.documentId"></a>

- *Type:* str

The client-assigned document ID to use for this document during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#document_id FirestoreDocument#document_id}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.fields"></a>

- *Type:* str

The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#fields FirestoreDocument#fields}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.database"></a>

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#database FirestoreDocument#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#id FirestoreDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#project FirestoreDocument#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#timeouts FirestoreDocument#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#create FirestoreDocument#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#delete FirestoreDocument#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#update FirestoreDocument#update}.

---

##### `reset_database` <a name="reset_database" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FirestoreDocument resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocument.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocument.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocument.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocument.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FirestoreDocument resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FirestoreDocument to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FirestoreDocument that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirestoreDocument to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference">FirestoreDocumentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.collectionInput">collection_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.databaseInput">database_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.documentIdInput">document_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.fieldsInput">fields_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.collection">collection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.database">database</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.documentId">document_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.fields">fields</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.timeouts"></a>

```python
timeouts: FirestoreDocumentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference">FirestoreDocumentTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `collection_input`<sup>Optional</sup> <a name="collection_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.collectionInput"></a>

```python
collection_input: str
```

- *Type:* str

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.databaseInput"></a>

```python
database_input: str
```

- *Type:* str

---

##### `document_id_input`<sup>Optional</sup> <a name="document_id_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.documentIdInput"></a>

```python
document_id_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.fieldsInput"></a>

```python
fields_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FirestoreDocumentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a>]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.collection"></a>

```python
collection: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.database"></a>

```python
database: str
```

- *Type:* str

---

##### `document_id`<sup>Required</sup> <a name="document_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.documentId"></a>

```python
document_id: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.fields"></a>

```python
fields: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firestoreDocument.FirestoreDocument.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FirestoreDocumentConfig <a name="FirestoreDocumentConfig" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocumentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  collection: str,
  document_id: str,
  fields: str,
  database: str = None,
  id: str = None,
  project: str = None,
  timeouts: FirestoreDocumentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.collection">collection</a></code> | <code>str</code> | The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.documentId">document_id</a></code> | <code>str</code> | The client-assigned document ID to use for this document during creation. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.fields">fields</a></code> | <code>str</code> | The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.database">database</a></code> | <code>str</code> | The Firestore database id. Defaults to '"(default)"'. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#id FirestoreDocument#id}. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#project FirestoreDocument#project}. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collection`<sup>Required</sup> <a name="collection" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.collection"></a>

```python
collection: str
```

- *Type:* str

The collection ID, relative to database. For example: chatrooms or chatrooms/my-document/private-messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#collection FirestoreDocument#collection}

---

##### `document_id`<sup>Required</sup> <a name="document_id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.documentId"></a>

```python
document_id: str
```

- *Type:* str

The client-assigned document ID to use for this document during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#document_id FirestoreDocument#document_id}

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.fields"></a>

```python
fields: str
```

- *Type:* str

The document's [fields](https://cloud.google.com/firestore/docs/reference/rest/v1/projects.databases.documents) formated as a json string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#fields FirestoreDocument#fields}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.database"></a>

```python
database: str
```

- *Type:* str

The Firestore database id. Defaults to '"(default)"'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#database FirestoreDocument#database}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#id FirestoreDocument#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#project FirestoreDocument#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentConfig.property.timeouts"></a>

```python
timeouts: FirestoreDocumentTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#timeouts FirestoreDocument#timeouts}

---

### FirestoreDocumentTimeouts <a name="FirestoreDocumentTimeouts" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocumentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#create FirestoreDocument#create}. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#delete FirestoreDocument#delete}. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#update FirestoreDocument#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#create FirestoreDocument#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#delete FirestoreDocument#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/firestore_document#update FirestoreDocument#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirestoreDocumentTimeoutsOutputReference <a name="FirestoreDocumentTimeoutsOutputReference" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import firestore_document

firestoreDocument.FirestoreDocumentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FirestoreDocumentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.firestoreDocument.FirestoreDocumentTimeouts">FirestoreDocumentTimeouts</a>]

---



