# `computeRegionTargetHttpProxy` Submodule <a name="`computeRegionTargetHttpProxy` Submodule" id="@cdktf/provider-google.computeRegionTargetHttpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionTargetHttpProxy <a name="ComputeRegionTargetHttpProxy" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy google_compute_region_target_http_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  url_map: str,
  description: str = None,
  http_keep_alive_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionTargetHttpProxyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.urlMap">url_map</a></code> | <code>str</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#name ComputeRegionTargetHttpProxy#name}

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.urlMap"></a>

- *Type:* str

A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#url_map ComputeRegionTargetHttpProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#description ComputeRegionTargetHttpProxy#description}

---

##### `http_keep_alive_timeout_sec`<sup>Optional</sup> <a name="http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.httpKeepAliveTimeoutSec"></a>

- *Type:* typing.Union[int, float]

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (600 seconds) will be used. For Regional
HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
maximum allowed value is 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#region ComputeRegionTargetHttpProxy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#timeouts ComputeRegionTargetHttpProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetHttpKeepAliveTimeoutSec">reset_http_keep_alive_timeout_sec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_http_keep_alive_timeout_sec` <a name="reset_http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetHttpKeepAliveTimeoutSec"></a>

```python
def reset_http_keep_alive_timeout_sec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeRegionTargetHttpProxy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeRegionTargetHttpProxy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionTargetHttpProxy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionTargetHttpProxy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionTargetHttpProxy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference">ComputeRegionTargetHttpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSecInput">http_keep_alive_timeout_sec_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMapInput">url_map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMap">url_map</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeouts"></a>

```python
timeouts: ComputeRegionTargetHttpProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference">ComputeRegionTargetHttpProxyTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `http_keep_alive_timeout_sec_input`<sup>Optional</sup> <a name="http_keep_alive_timeout_sec_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSecInput"></a>

```python
http_keep_alive_timeout_sec_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeRegionTargetHttpProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>]

---

##### `url_map_input`<sup>Optional</sup> <a name="url_map_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMapInput"></a>

```python
url_map_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `http_keep_alive_timeout_sec`<sup>Required</sup> <a name="http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.httpKeepAliveTimeoutSec"></a>

```python
http_keep_alive_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionTargetHttpProxyConfig <a name="ComputeRegionTargetHttpProxyConfig" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  url_map: str,
  description: str = None,
  http_keep_alive_timeout_sec: typing.Union[int, float] = None,
  id: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionTargetHttpProxyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.urlMap">url_map</a></code> | <code>str</code> | A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.httpKeepAliveTimeoutSec">http_keep_alive_timeout_sec</a></code> | <code>typing.Union[int, float]</code> | Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds). |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created target https proxy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#name ComputeRegionTargetHttpProxy#name}

---

##### `url_map`<sup>Required</sup> <a name="url_map" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.urlMap"></a>

```python
url_map: str
```

- *Type:* str

A reference to the RegionUrlMap resource that defines the mapping from URL to the BackendService.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#url_map ComputeRegionTargetHttpProxy#url_map}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#description ComputeRegionTargetHttpProxy#description}

---

##### `http_keep_alive_timeout_sec`<sup>Optional</sup> <a name="http_keep_alive_timeout_sec" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.httpKeepAliveTimeoutSec"></a>

```python
http_keep_alive_timeout_sec: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how long to keep a connection open, after completing a response, while there is no matching traffic (in seconds).

If an HTTP keepalive is
not specified, a default value (600 seconds) will be used. For Regional
HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
maximum allowed value is 600 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpProxy#http_keep_alive_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#id ComputeRegionTargetHttpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#project ComputeRegionTargetHttpProxy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created target https proxy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#region ComputeRegionTargetHttpProxy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionTargetHttpProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#timeouts ComputeRegionTargetHttpProxy#timeouts}

---

### ComputeRegionTargetHttpProxyTimeouts <a name="ComputeRegionTargetHttpProxyTimeouts" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#create ComputeRegionTargetHttpProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#delete ComputeRegionTargetHttpProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/compute_region_target_http_proxy#update ComputeRegionTargetHttpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionTargetHttpProxyTimeoutsOutputReference <a name="ComputeRegionTargetHttpProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_region_target_http_proxy

computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeRegionTargetHttpProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeRegionTargetHttpProxy.ComputeRegionTargetHttpProxyTimeouts">ComputeRegionTargetHttpProxyTimeouts</a>]

---



