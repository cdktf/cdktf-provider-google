# `google_compute_backend_bucket`

Refer to the Terraform Registory for docs: [`google_compute_backend_bucket`](https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket).

# `computeBackendBucket` Submodule <a name="`computeBackendBucket` Submodule" id="@cdktf/provider-google.computeBackendBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucket <a name="ComputeBackendBucket" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket google_compute_backend_bucket}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucket(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  name: str,
  cdn_policy: ComputeBackendBucketCdnPolicy = None,
  compression_mode: str = None,
  custom_response_headers: typing.List[str] = None,
  description: str = None,
  edge_security_policy: str = None,
  enable_cdn: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: ComputeBackendBucketTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.bucketName">bucket_name</a></code> | <code>str</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.compressionMode">compression_mode</a></code> | <code>str</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.customResponseHeaders">custom_response_headers</a></code> | <code>typing.List[str]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.edgeSecurityPolicy">edge_security_policy</a></code> | <code>str</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#id ComputeBackendBucket#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#project ComputeBackendBucket#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.bucketName"></a>

- *Type:* str

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#bucket_name ComputeBackendBucket#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#name ComputeBackendBucket#name}

---

##### `cdn_policy`<sup>Optional</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.cdnPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#cdn_policy ComputeBackendBucket#cdn_policy}

---

##### `compression_mode`<sup>Optional</sup> <a name="compression_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.compressionMode"></a>

- *Type:* str

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#compression_mode ComputeBackendBucket#compression_mode}

---

##### `custom_response_headers`<sup>Optional</sup> <a name="custom_response_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.customResponseHeaders"></a>

- *Type:* typing.List[str]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#custom_response_headers ComputeBackendBucket#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.description"></a>

- *Type:* str

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#description ComputeBackendBucket#description}

---

##### `edge_security_policy`<sup>Optional</sup> <a name="edge_security_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.edgeSecurityPolicy"></a>

- *Type:* str

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#edge_security_policy ComputeBackendBucket#edge_security_policy}

---

##### `enable_cdn`<sup>Optional</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.enableCdn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable Cloud CDN for this BackendBucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#enable_cdn ComputeBackendBucket#enable_cdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#id ComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#project ComputeBackendBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#timeouts ComputeBackendBucket#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy">put_cdn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCdnPolicy">reset_cdn_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCompressionMode">reset_compression_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCustomResponseHeaders">reset_custom_response_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEdgeSecurityPolicy">reset_edge_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEnableCdn">reset_enable_cdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_cdn_policy` <a name="put_cdn_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy"></a>

```python
def put_cdn_policy(
  bypass_cache_on_request_headers: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]] = None,
  cache_key_policy: ComputeBackendBucketCdnPolicyCacheKeyPolicy = None,
  cache_mode: str = None,
  client_ttl: typing.Union[int, float] = None,
  default_ttl: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  negative_caching: typing.Union[bool, IResolvable] = None,
  negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyNegativeCachingPolicy]] = None,
  request_coalescing: typing.Union[bool, IResolvable] = None,
  serve_while_stale: typing.Union[int, float] = None,
  signed_url_cache_max_age_sec: typing.Union[int, float] = None
) -> None
```

###### `bypass_cache_on_request_headers`<sup>Optional</sup> <a name="bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.bypassCacheOnRequestHeaders"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#bypass_cache_on_request_headers ComputeBackendBucket#bypass_cache_on_request_headers}

---

###### `cache_key_policy`<sup>Optional</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.cacheKeyPolicy"></a>

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#cache_key_policy ComputeBackendBucket#cache_key_policy}

---

###### `cache_mode`<sup>Optional</sup> <a name="cache_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.cacheMode"></a>

- *Type:* str

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#cache_mode ComputeBackendBucket#cache_mode}

---

###### `client_ttl`<sup>Optional</sup> <a name="client_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.clientTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#client_ttl ComputeBackendBucket#client_ttl}

---

###### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.defaultTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#default_ttl ComputeBackendBucket#default_ttl}

---

###### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.maxTtl"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#max_ttl ComputeBackendBucket#max_ttl}

---

###### `negative_caching`<sup>Optional</sup> <a name="negative_caching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.negativeCaching"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#negative_caching ComputeBackendBucket#negative_caching}

---

###### `negative_caching_policy`<sup>Optional</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.negativeCachingPolicy"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#negative_caching_policy ComputeBackendBucket#negative_caching_policy}

---

###### `request_coalescing`<sup>Optional</sup> <a name="request_coalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.requestCoalescing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#request_coalescing ComputeBackendBucket#request_coalescing}

---

###### `serve_while_stale`<sup>Optional</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.serveWhileStale"></a>

- *Type:* typing.Union[int, float]

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#serve_while_stale ComputeBackendBucket#serve_while_stale}

---

###### `signed_url_cache_max_age_sec`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putCdnPolicy.parameter.signedUrlCacheMaxAgeSec"></a>

- *Type:* typing.Union[int, float]

Maximum number of seconds the response to a signed URL request will be considered fresh.

After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#signed_url_cache_max_age_sec ComputeBackendBucket#signed_url_cache_max_age_sec}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#create ComputeBackendBucket#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#delete ComputeBackendBucket#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#update ComputeBackendBucket#update}.

---

##### `reset_cdn_policy` <a name="reset_cdn_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCdnPolicy"></a>

```python
def reset_cdn_policy() -> None
```

##### `reset_compression_mode` <a name="reset_compression_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCompressionMode"></a>

```python
def reset_compression_mode() -> None
```

##### `reset_custom_response_headers` <a name="reset_custom_response_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetCustomResponseHeaders"></a>

```python
def reset_custom_response_headers() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_edge_security_policy` <a name="reset_edge_security_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEdgeSecurityPolicy"></a>

```python
def reset_edge_security_policy() -> None
```

##### `reset_enable_cdn` <a name="reset_enable_cdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetEnableCdn"></a>

```python
def reset_enable_cdn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeBackendBucket resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucket.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucket.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucket.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucket.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeBackendBucket resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeBackendBucket to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeBackendBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeBackendBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference">ComputeBackendBucketCdnPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference">ComputeBackendBucketTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicyInput">cdn_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionModeInput">compression_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeadersInput">custom_response_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicyInput">edge_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdnInput">enable_cdn_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionMode">compression_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeaders">custom_response_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicy">edge_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cdn_policy`<sup>Required</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicy"></a>

```python
cdn_policy: ComputeBackendBucketCdnPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference">ComputeBackendBucketCdnPolicyOutputReference</a>

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeouts"></a>

```python
timeouts: ComputeBackendBucketTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference">ComputeBackendBucketTimeoutsOutputReference</a>

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `cdn_policy_input`<sup>Optional</sup> <a name="cdn_policy_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.cdnPolicyInput"></a>

```python
cdn_policy_input: ComputeBackendBucketCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---

##### `compression_mode_input`<sup>Optional</sup> <a name="compression_mode_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionModeInput"></a>

```python
compression_mode_input: str
```

- *Type:* str

---

##### `custom_response_headers_input`<sup>Optional</sup> <a name="custom_response_headers_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeadersInput"></a>

```python
custom_response_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `edge_security_policy_input`<sup>Optional</sup> <a name="edge_security_policy_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicyInput"></a>

```python
edge_security_policy_input: str
```

- *Type:* str

---

##### `enable_cdn_input`<sup>Optional</sup> <a name="enable_cdn_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdnInput"></a>

```python
enable_cdn_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeBackendBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `compression_mode`<sup>Required</sup> <a name="compression_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.compressionMode"></a>

```python
compression_mode: str
```

- *Type:* str

---

##### `custom_response_headers`<sup>Required</sup> <a name="custom_response_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.customResponseHeaders"></a>

```python
custom_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `edge_security_policy`<sup>Required</sup> <a name="edge_security_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.edgeSecurityPolicy"></a>

```python
edge_security_policy: str
```

- *Type:* str

---

##### `enable_cdn`<sup>Required</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.enableCdn"></a>

```python
enable_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucket.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketCdnPolicy <a name="ComputeBackendBucketCdnPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicy(
  bypass_cache_on_request_headers: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]] = None,
  cache_key_policy: ComputeBackendBucketCdnPolicyCacheKeyPolicy = None,
  cache_mode: str = None,
  client_ttl: typing.Union[int, float] = None,
  default_ttl: typing.Union[int, float] = None,
  max_ttl: typing.Union[int, float] = None,
  negative_caching: typing.Union[bool, IResolvable] = None,
  negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyNegativeCachingPolicy]] = None,
  request_coalescing: typing.Union[bool, IResolvable] = None,
  serve_while_stale: typing.Union[int, float] = None,
  signed_url_cache_max_age_sec: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders">bypass_cache_on_request_headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]</code> | bypass_cache_on_request_headers block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | cache_key_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheMode">cache_mode</a></code> | <code>str</code> | Specifies the cache setting for all responses from this backend. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age). |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum allowed TTL for cached content served by this origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCaching">negative_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]</code> | negative_caching_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.requestCoalescing">request_coalescing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | Maximum number of seconds the response to a signed URL request will be considered fresh. |

---

##### `bypass_cache_on_request_headers`<sup>Optional</sup> <a name="bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.bypassCacheOnRequestHeaders"></a>

```python
bypass_cache_on_request_headers: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]

bypass_cache_on_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#bypass_cache_on_request_headers ComputeBackendBucket#bypass_cache_on_request_headers}

---

##### `cache_key_policy`<sup>Optional</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheKeyPolicy"></a>

```python
cache_key_policy: ComputeBackendBucketCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

cache_key_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#cache_key_policy ComputeBackendBucket#cache_key_policy}

---

##### `cache_mode`<sup>Optional</sup> <a name="cache_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

Specifies the cache setting for all responses from this backend.

The possible values are: USE_ORIGIN_HEADERS, FORCE_CACHE_ALL and CACHE_ALL_STATIC Possible values: ["USE_ORIGIN_HEADERS", "FORCE_CACHE_ALL", "CACHE_ALL_STATIC"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#cache_mode ComputeBackendBucket#cache_mode}

---

##### `client_ttl`<sup>Optional</sup> <a name="client_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#client_ttl ComputeBackendBucket#client_ttl}

---

##### `default_ttl`<sup>Optional</sup> <a name="default_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the default TTL for cached content served by this origin for responses that do not have an existing valid TTL (max-age or s-max-age).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#default_ttl ComputeBackendBucket#default_ttl}

---

##### `max_ttl`<sup>Optional</sup> <a name="max_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum allowed TTL for cached content served by this origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#max_ttl ComputeBackendBucket#max_ttl}

---

##### `negative_caching`<sup>Optional</sup> <a name="negative_caching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCaching"></a>

```python
negative_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Negative caching allows per-status code TTLs to be set, in order to apply fine-grained caching for common errors or redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#negative_caching ComputeBackendBucket#negative_caching}

---

##### `negative_caching_policy`<sup>Optional</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]

negative_caching_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#negative_caching_policy ComputeBackendBucket#negative_caching_policy}

---

##### `request_coalescing`<sup>Optional</sup> <a name="request_coalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.requestCoalescing"></a>

```python
request_coalescing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true then Cloud CDN will combine multiple concurrent cache fill requests into a small number of requests to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#request_coalescing ComputeBackendBucket#request_coalescing}

---

##### `serve_while_stale`<sup>Optional</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Serve existing content from the cache (if available) when revalidating content with the origin, or when an error is encountered when refreshing the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#serve_while_stale ComputeBackendBucket#serve_while_stale}

---

##### `signed_url_cache_max_age_sec`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy.property.signedUrlCacheMaxAgeSec"></a>

```python
signed_url_cache_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of seconds the response to a signed URL request will be considered fresh.

After this time period,
the response will be revalidated before being served.
When serving responses to signed URL requests,
Cloud CDN will internally behave as though
all responses from this backend had a "Cache-Control: public,
max-age=[TTL]" header, regardless of any existing Cache-Control
header. The actual headers served in responses will not be altered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#signed_url_cache_max_age_sec ComputeBackendBucket#signed_url_cache_max_age_sec}

---

### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders(
  header_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName">header_name</a></code> | <code>str</code> | The header field name to match on when bypassing cache. Values are case-insensitive. |

---

##### `header_name`<sup>Optional</sup> <a name="header_name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

The header field name to match on when bypassing cache. Values are case-insensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#header_name ComputeBackendBucket#header_name}

---

### ComputeBackendBucketCdnPolicyCacheKeyPolicy <a name="ComputeBackendBucketCdnPolicyCacheKeyPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy(
  include_http_headers: typing.List[str] = None,
  query_string_whitelist: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders">include_http_headers</a></code> | <code>typing.List[str]</code> | Allows HTTP request headers (by name) to be used in the cache key. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | Names of query string parameters to include in cache keys. |

---

##### `include_http_headers`<sup>Optional</sup> <a name="include_http_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.includeHttpHeaders"></a>

```python
include_http_headers: typing.List[str]
```

- *Type:* typing.List[str]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#include_http_headers ComputeBackendBucket#include_http_headers}

---

##### `query_string_whitelist`<sup>Optional</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

Names of query string parameters to include in cache keys.

Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#query_string_whitelist ComputeBackendBucket#query_string_whitelist}

---

### ComputeBackendBucketCdnPolicyNegativeCachingPolicy <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy(
  code: typing.Union[int, float] = None,
  ttl: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code">code</a></code> | <code>typing.Union[int, float]</code> | The HTTP status code to define a TTL against. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | The TTL (in seconds) for which to cache responses with the corresponding status code. |

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The HTTP status code to define a TTL against.

Only HTTP status codes 300, 301, 308, 404, 405, 410, 421, 451 and 501
can be specified as values, and you cannot specify a status code more than once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#code ComputeBackendBucket#code}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The TTL (in seconds) for which to cache responses with the corresponding status code.

The maximum allowed value is 1800s
(30 minutes), noting that infrequently accessed objects may be evicted from the cache before the defined TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#ttl ComputeBackendBucket#ttl}

---

### ComputeBackendBucketConfig <a name="ComputeBackendBucketConfig" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket_name: str,
  name: str,
  cdn_policy: ComputeBackendBucketCdnPolicy = None,
  compression_mode: str = None,
  custom_response_headers: typing.List[str] = None,
  description: str = None,
  edge_security_policy: str = None,
  enable_cdn: typing.Union[bool, IResolvable] = None,
  id: str = None,
  project: str = None,
  timeouts: ComputeBackendBucketTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.bucketName">bucket_name</a></code> | <code>str</code> | Cloud Storage bucket name. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.cdnPolicy">cdn_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | cdn_policy block. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.compressionMode">compression_mode</a></code> | <code>str</code> | Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"]. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.customResponseHeaders">custom_response_headers</a></code> | <code>typing.List[str]</code> | Headers that the HTTP/S load balancer should add to proxied responses. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.description">description</a></code> | <code>str</code> | An optional textual description of the resource; provided by the client when the resource is created. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.edgeSecurityPolicy">edge_security_policy</a></code> | <code>str</code> | The security policy associated with this backend bucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.enableCdn">enable_cdn</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, enable Cloud CDN for this BackendBucket. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#id ComputeBackendBucket#id}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#project ComputeBackendBucket#project}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#bucket_name ComputeBackendBucket#bucket_name}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#name ComputeBackendBucket#name}

---

##### `cdn_policy`<sup>Optional</sup> <a name="cdn_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.cdnPolicy"></a>

```python
cdn_policy: ComputeBackendBucketCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

cdn_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#cdn_policy ComputeBackendBucket#cdn_policy}

---

##### `compression_mode`<sup>Optional</sup> <a name="compression_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.compressionMode"></a>

```python
compression_mode: str
```

- *Type:* str

Compress text responses using Brotli or gzip compression, based on the client's Accept-Encoding header. Possible values: ["AUTOMATIC", "DISABLED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#compression_mode ComputeBackendBucket#compression_mode}

---

##### `custom_response_headers`<sup>Optional</sup> <a name="custom_response_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.customResponseHeaders"></a>

```python
custom_response_headers: typing.List[str]
```

- *Type:* typing.List[str]

Headers that the HTTP/S load balancer should add to proxied responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#custom_response_headers ComputeBackendBucket#custom_response_headers}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional textual description of the resource; provided by the client when the resource is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#description ComputeBackendBucket#description}

---

##### `edge_security_policy`<sup>Optional</sup> <a name="edge_security_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.edgeSecurityPolicy"></a>

```python
edge_security_policy: str
```

- *Type:* str

The security policy associated with this backend bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#edge_security_policy ComputeBackendBucket#edge_security_policy}

---

##### `enable_cdn`<sup>Optional</sup> <a name="enable_cdn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.enableCdn"></a>

```python
enable_cdn: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, enable Cloud CDN for this BackendBucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#enable_cdn ComputeBackendBucket#enable_cdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#id ComputeBackendBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#project ComputeBackendBucket#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketConfig.property.timeouts"></a>

```python
timeouts: ComputeBackendBucketTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#timeouts ComputeBackendBucket#timeouts}

---

### ComputeBackendBucketTimeouts <a name="ComputeBackendBucketTimeouts" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#create ComputeBackendBucket#create}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#delete ComputeBackendBucket#delete}. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#update ComputeBackendBucket#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#create ComputeBackendBucket#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#delete ComputeBackendBucket#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#update ComputeBackendBucket#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]

---


### ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference <a name="ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName">reset_header_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_header_name` <a name="reset_header_name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.resetHeaderName"></a>

```python
def reset_header_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]

---


### ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders">reset_include_http_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist">reset_query_string_whitelist</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_include_http_headers` <a name="reset_include_http_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetIncludeHttpHeaders"></a>

```python
def reset_include_http_headers() -> None
```

##### `reset_query_string_whitelist` <a name="reset_query_string_whitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.resetQueryStringWhitelist"></a>

```python
def reset_query_string_whitelist() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput">include_http_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput">query_string_whitelist_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders">include_http_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">query_string_whitelist</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `include_http_headers_input`<sup>Optional</sup> <a name="include_http_headers_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeadersInput"></a>

```python
include_http_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist_input`<sup>Optional</sup> <a name="query_string_whitelist_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelistInput"></a>

```python
query_string_whitelist_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_http_headers`<sup>Required</sup> <a name="include_http_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.includeHttpHeaders"></a>

```python
include_http_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `query_string_whitelist`<sup>Required</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```python
query_string_whitelist: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendBucketCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---


### ComputeBackendBucketCdnPolicyNegativeCachingPolicyList <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicyList" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]

---


### ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode">reset_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_code` <a name="reset_code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetCode"></a>

```python
def reset_code() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.resetTtl"></a>

```python
def reset_ttl() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput">code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.codeInput"></a>

```python
code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendBucketCdnPolicyNegativeCachingPolicy]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]

---


### ComputeBackendBucketCdnPolicyOutputReference <a name="ComputeBackendBucketCdnPolicyOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders">put_bypass_cache_on_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy">put_cache_key_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy">put_negative_caching_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders">reset_bypass_cache_on_request_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy">reset_cache_key_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheMode">reset_cache_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetClientTtl">reset_client_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl">reset_default_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl">reset_max_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching">reset_negative_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy">reset_negative_caching_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing">reset_request_coalescing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale">reset_serve_while_stale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec">reset_signed_url_cache_max_age_sec</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bypass_cache_on_request_headers` <a name="put_bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders"></a>

```python
def put_bypass_cache_on_request_headers(
  value: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putBypassCacheOnRequestHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]

---

##### `put_cache_key_policy` <a name="put_cache_key_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy"></a>

```python
def put_cache_key_policy(
  include_http_headers: typing.List[str] = None,
  query_string_whitelist: typing.List[str] = None
) -> None
```

###### `include_http_headers`<sup>Optional</sup> <a name="include_http_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy.parameter.includeHttpHeaders"></a>

- *Type:* typing.List[str]

Allows HTTP request headers (by name) to be used in the cache key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#include_http_headers ComputeBackendBucket#include_http_headers}

---

###### `query_string_whitelist`<sup>Optional</sup> <a name="query_string_whitelist" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putCacheKeyPolicy.parameter.queryStringWhitelist"></a>

- *Type:* typing.List[str]

Names of query string parameters to include in cache keys.

Default parameters are always included. '&' and '=' will
be percent encoded and not treated as delimiters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.5.0/docs/resources/compute_backend_bucket#query_string_whitelist ComputeBackendBucket#query_string_whitelist}

---

##### `put_negative_caching_policy` <a name="put_negative_caching_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy"></a>

```python
def put_negative_caching_policy(
  value: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyNegativeCachingPolicy]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.putNegativeCachingPolicy.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]

---

##### `reset_bypass_cache_on_request_headers` <a name="reset_bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetBypassCacheOnRequestHeaders"></a>

```python
def reset_bypass_cache_on_request_headers() -> None
```

##### `reset_cache_key_policy` <a name="reset_cache_key_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheKeyPolicy"></a>

```python
def reset_cache_key_policy() -> None
```

##### `reset_cache_mode` <a name="reset_cache_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetCacheMode"></a>

```python
def reset_cache_mode() -> None
```

##### `reset_client_ttl` <a name="reset_client_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetClientTtl"></a>

```python
def reset_client_ttl() -> None
```

##### `reset_default_ttl` <a name="reset_default_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetDefaultTtl"></a>

```python
def reset_default_ttl() -> None
```

##### `reset_max_ttl` <a name="reset_max_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetMaxTtl"></a>

```python
def reset_max_ttl() -> None
```

##### `reset_negative_caching` <a name="reset_negative_caching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCaching"></a>

```python
def reset_negative_caching() -> None
```

##### `reset_negative_caching_policy` <a name="reset_negative_caching_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetNegativeCachingPolicy"></a>

```python
def reset_negative_caching_policy() -> None
```

##### `reset_request_coalescing` <a name="reset_request_coalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetRequestCoalescing"></a>

```python
def reset_request_coalescing() -> None
```

##### `reset_serve_while_stale` <a name="reset_serve_while_stale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetServeWhileStale"></a>

```python
def reset_serve_while_stale() -> None
```

##### `reset_signed_url_cache_max_age_sec` <a name="reset_signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.resetSignedUrlCacheMaxAgeSec"></a>

```python
def reset_signed_url_cache_max_age_sec() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders">bypass_cache_on_request_headers</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy">cache_key_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy">negative_caching_policy</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList">ComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput">bypass_cache_on_request_headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput">cache_key_policy_input</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput">cache_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput">client_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput">default_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput">max_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput">negative_caching_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput">negative_caching_policy_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput">request_coalescing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput">serve_while_stale_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput">signed_url_cache_max_age_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheMode">cache_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtl">client_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl">default_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtl">max_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching">negative_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing">request_coalescing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale">serve_while_stale</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signed_url_cache_max_age_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bypass_cache_on_request_headers`<sup>Required</sup> <a name="bypass_cache_on_request_headers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeaders"></a>

```python
bypass_cache_on_request_headers: ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeadersList</a>

---

##### `cache_key_policy`<sup>Required</sup> <a name="cache_key_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```python
cache_key_policy: ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference">ComputeBackendBucketCdnPolicyCacheKeyPolicyOutputReference</a>

---

##### `negative_caching_policy`<sup>Required</sup> <a name="negative_caching_policy" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```python
negative_caching_policy: ComputeBackendBucketCdnPolicyNegativeCachingPolicyList
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicyList">ComputeBackendBucketCdnPolicyNegativeCachingPolicyList</a>

---

##### `bypass_cache_on_request_headers_input`<sup>Optional</sup> <a name="bypass_cache_on_request_headers_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.bypassCacheOnRequestHeadersInput"></a>

```python
bypass_cache_on_request_headers_input: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders">ComputeBackendBucketCdnPolicyBypassCacheOnRequestHeaders</a>]]

---

##### `cache_key_policy_input`<sup>Optional</sup> <a name="cache_key_policy_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheKeyPolicyInput"></a>

```python
cache_key_policy_input: ComputeBackendBucketCdnPolicyCacheKeyPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyCacheKeyPolicy">ComputeBackendBucketCdnPolicyCacheKeyPolicy</a>

---

##### `cache_mode_input`<sup>Optional</sup> <a name="cache_mode_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheModeInput"></a>

```python
cache_mode_input: str
```

- *Type:* str

---

##### `client_ttl_input`<sup>Optional</sup> <a name="client_ttl_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtlInput"></a>

```python
client_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl_input`<sup>Optional</sup> <a name="default_ttl_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtlInput"></a>

```python
default_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl_input`<sup>Optional</sup> <a name="max_ttl_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtlInput"></a>

```python
max_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching_input`<sup>Optional</sup> <a name="negative_caching_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingInput"></a>

```python
negative_caching_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `negative_caching_policy_input`<sup>Optional</sup> <a name="negative_caching_policy_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCachingPolicyInput"></a>

```python
negative_caching_policy_input: typing.Union[IResolvable, typing.List[ComputeBackendBucketCdnPolicyNegativeCachingPolicy]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyNegativeCachingPolicy">ComputeBackendBucketCdnPolicyNegativeCachingPolicy</a>]]

---

##### `request_coalescing_input`<sup>Optional</sup> <a name="request_coalescing_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescingInput"></a>

```python
request_coalescing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serve_while_stale_input`<sup>Optional</sup> <a name="serve_while_stale_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStaleInput"></a>

```python
serve_while_stale_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec_input`<sup>Optional</sup> <a name="signed_url_cache_max_age_sec_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSecInput"></a>

```python
signed_url_cache_max_age_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cache_mode`<sup>Required</sup> <a name="cache_mode" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.cacheMode"></a>

```python
cache_mode: str
```

- *Type:* str

---

##### `client_ttl`<sup>Required</sup> <a name="client_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.clientTtl"></a>

```python
client_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `default_ttl`<sup>Required</sup> <a name="default_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.defaultTtl"></a>

```python
default_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_ttl`<sup>Required</sup> <a name="max_ttl" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.maxTtl"></a>

```python
max_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `negative_caching`<sup>Required</sup> <a name="negative_caching" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.negativeCaching"></a>

```python
negative_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `request_coalescing`<sup>Required</sup> <a name="request_coalescing" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.requestCoalescing"></a>

```python
request_coalescing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `serve_while_stale`<sup>Required</sup> <a name="serve_while_stale" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.serveWhileStale"></a>

```python
serve_while_stale: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `signed_url_cache_max_age_sec`<sup>Required</sup> <a name="signed_url_cache_max_age_sec" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```python
signed_url_cache_max_age_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ComputeBackendBucketCdnPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketCdnPolicy">ComputeBackendBucketCdnPolicy</a>

---


### ComputeBackendBucketTimeoutsOutputReference <a name="ComputeBackendBucketTimeoutsOutputReference" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_backend_bucket

computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeBackendBucketTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeBackendBucket.ComputeBackendBucketTimeouts">ComputeBackendBucketTimeouts</a>]

---



