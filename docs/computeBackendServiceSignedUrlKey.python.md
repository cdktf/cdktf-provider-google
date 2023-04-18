# `google_compute_backend_service_signed_url_key`

Refer to the Terraform Registory for docs: [`google_compute_backend_service_signed_url_key`](https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key).

# `computeBackendServiceSignedUrlKey` Submodule <a name="`computeBackendServiceSignedUrlKey` Submodule" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendServiceSignedUrlKey <a name="ComputeBackendServiceSignedUrlKey" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key google_compute_backend_service_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  key_value: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeBackendServiceSignedUrlKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.backendService">backend_service</a></code> | <code>str</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.keyValue">key_value</a></code> | <code>str</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.backendService"></a>

- *Type:* str

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#backend_service ComputeBackendServiceSignedUrlKey#backend_service}

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.keyValue"></a>

- *Type:* str

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#key_value ComputeBackendServiceSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.name"></a>

- *Type:* str

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#name ComputeBackendServiceSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#timeouts ComputeBackendServiceSignedUrlKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendServiceInput">backend_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValueInput">key_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendService">backend_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValue">key_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeouts"></a>

```python
timeouts: ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference">ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backend_service_input`<sup>Optional</sup> <a name="backend_service_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendServiceInput"></a>

```python
backend_service_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_value_input`<sup>Optional</sup> <a name="key_value_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValueInput"></a>

```python
key_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ComputeBackendServiceSignedUrlKeyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>, cdktf.IResolvable]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendServiceSignedUrlKeyConfig <a name="ComputeBackendServiceSignedUrlKeyConfig" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  key_value: str,
  name: str,
  id: str = None,
  project: str = None,
  timeouts: ComputeBackendServiceSignedUrlKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.backendService">backend_service</a></code> | <code>str</code> | The backend service this signed URL key belongs. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.keyValue">key_value</a></code> | <code>str</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.name">name</a></code> | <code>str</code> | Name of the signed URL key. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

The backend service this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#backend_service ComputeBackendServiceSignedUrlKey#backend_service}

---

##### `key_value`<sup>Required</sup> <a name="key_value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.keyValue"></a>

```python
key_value: str
```

- *Type:* str

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#key_value ComputeBackendServiceSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#name ComputeBackendServiceSignedUrlKey#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#id ComputeBackendServiceSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#project ComputeBackendServiceSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyConfig.property.timeouts"></a>

```python
timeouts: ComputeBackendServiceSignedUrlKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#timeouts ComputeBackendServiceSignedUrlKey#timeouts}

---

### ComputeBackendServiceSignedUrlKeyTimeouts <a name="ComputeBackendServiceSignedUrlKeyTimeouts" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#create ComputeBackendServiceSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.0/docs/resources/compute_backend_service_signed_url_key#delete ComputeBackendServiceSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_service_signed_url_key

computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ComputeBackendServiceSignedUrlKeyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeBackendServiceSignedUrlKey.ComputeBackendServiceSignedUrlKeyTimeouts">ComputeBackendServiceSignedUrlKeyTimeouts</a>, cdktf.IResolvable]

---



