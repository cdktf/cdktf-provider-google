# `computeBackendBucketSignedUrlKey` Submodule <a name="`computeBackendBucketSignedUrlKey` Submodule" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucketSignedUrlKey <a name="ComputeBackendBucketSignedUrlKey" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_bucket: str,
  key_value: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeBackendBucketSignedUrlKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.backendBucket">backend_bucket</a></code> | <code>str</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.keyValue">key_value</a></code> | <code>str</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_bucket`<sup>Required</sup> <a name="backend_bucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.backendBucket"></a>

- *Type:* str

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.keyValue"></a>

- *Type:* str

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.name"></a>

- *Type:* str

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeBackendBucketSignedUrlKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeBackendBucketSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendBucketSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput">backend_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput">key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket">backend_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue">key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts"></a>

```python
timeouts: ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backend_bucket_input`<sup>Optional</sup> <a name="backend_bucket_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput"></a>

```python
backend_bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_value_input`<sup>Optional</sup> <a name="key_value_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput"></a>

```python
key_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeBackendBucketSignedUrlKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>]

---

##### `backend_bucket`<sup>Required</sup> <a name="backend_bucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket"></a>

```python
backend_bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketSignedUrlKeyConfig <a name="ComputeBackendBucketSignedUrlKeyConfig" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_bucket: str,
  key_value: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeBackendBucketSignedUrlKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket">backend_bucket</a></code> | <code>str</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue">key_value</a></code> | <code>str</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name">name</a></code> | <code>str</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_bucket`<sup>Required</sup> <a name="backend_bucket" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket"></a>

```python
backend_bucket: str
```

- *Type:* str

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts"></a>

```python
timeouts: ComputeBackendBucketSignedUrlKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

### ComputeBackendBucketSignedUrlKeyTimeouts <a name="ComputeBackendBucketSignedUrlKeyTimeouts" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket_signed_url_key

computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendBucketSignedUrlKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>]

---



