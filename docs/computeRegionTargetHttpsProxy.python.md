# `computeRegionTargetHttpsProxy` Submodule <a name="`computeRegionTargetHttpsProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpsProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpsProxy <a name="ComputeRegionTargetHttpsProxy" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy google_compute_region_target_https_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ssl_certificates: typing.List[str],
  url_map: str,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionTargetHttpsProxyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | A list of RegionSslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.urlMap">url_map</a></code> | <code>str</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}

---

##### `ssl_certificates`<sup>Required</sup> <a name="ssl_certificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.sslCertificates"></a>

- *Type:* typing.List[str]

A list of RegionSslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, exactly
one SSL certificate must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.urlMap"></a>

- *Type:* str

A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput">ssl_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput">url_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap">url_map</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeouts"></a>

```python
timeouts: ComputeRegionTargetHttpsProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference">ComputeRegionTargetHttpsProxyTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `ssl_certificates_input`<sup>Optional</sup> <a name="ssl_certificates_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificatesInput"></a>

```python
ssl_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[ComputeRegionTargetHttpsProxyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>, cdktf.IResolvable]

---

##### `url_map_input`<sup>Optional</sup> <a name="url_map_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMapInput"></a>

```python
url_map_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `ssl_certificates`<sup>Required</sup> <a name="ssl_certificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpsProxyConfig <a name="ComputeRegionTargetHttpsProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ssl_certificates: typing.List[str],
  url_map: str,
  description: str = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionTargetHttpsProxyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates">ssl_certificates</a></code> | <code>typing.List[str]</code> | A list of RegionSslCertificate resources that are used to authenticate connections between users and the load balancer. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap">url_map</a></code> | <code>str</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}

---

##### `ssl_certificates`<sup>Required</sup> <a name="ssl_certificates" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.sslCertificates"></a>

```python
ssl_certificates: typing.List[str]
```

- *Type:* typing.List[str]

A list of RegionSslCertificate resources that are used to authenticate connections between users and the load balancer.

Currently, exactly
one SSL certificate must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

A reference to the RegionUrlMap resource that defines the mapping from URL to the RegionBackendService.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionTargetHttpsProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}

---

### ComputeRegionTargetHttpsProxyTimeouts <a name="ComputeRegionTargetHttpsProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpsProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpsProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_https_proxy

computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[ComputeRegionTargetHttpsProxyTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google.computeRegionTargetHttpsProxy.ComputeRegionTargetHttpsProxyTimeouts">ComputeRegionTargetHttpsProxyTimeouts</a>, cdktf.IResolvable]

---



