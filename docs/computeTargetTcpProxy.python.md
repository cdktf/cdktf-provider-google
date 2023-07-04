# `google_compute_target_tcp_proxy`

Refer to the Terraform Registory for docs: [`google_compute_target_tcp_proxy`](https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy).

# `computeTargetTcpProxy` Submodule <a name="`computeTargetTcpProxy` Submodule" id="@cdktf/provider-google.computeTargetTcpProxy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetTcpProxy <a name="ComputeTargetTcpProxy" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy google_compute_target_tcp_proxy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxy(
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
  name: str,
  description: str = None,
  id: str = None,
  project: str = None,
  proxy_bind: typing.Union[bool, IResolvable] = None,
  proxy_header: str = None,
  timeouts: ComputeTargetTcpProxyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.backendService">backend_service</a></code> | <code>str</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#id ComputeTargetTcpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#project ComputeTargetTcpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.proxyBind">proxy_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.backendService"></a>

- *Type:* str

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#backend_service ComputeTargetTcpProxy#backend_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#name ComputeTargetTcpProxy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#description ComputeTargetTcpProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#id ComputeTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#project ComputeTargetTcpProxy#project}.

---

##### `proxy_bind`<sup>Optional</sup> <a name="proxy_bind" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.proxyBind"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#proxy_bind ComputeTargetTcpProxy#proxy_bind}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.proxyHeader"></a>

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#proxy_header ComputeTargetTcpProxy#proxy_header}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#timeouts ComputeTargetTcpProxy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetProxyBind">reset_proxy_bind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetProxyHeader">reset_proxy_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#create ComputeTargetTcpProxy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#delete ComputeTargetTcpProxy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#update ComputeTargetTcpProxy#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_proxy_bind` <a name="reset_proxy_bind" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetProxyBind"></a>

```python
def reset_proxy_bind() -> None
```

##### `reset_proxy_header` <a name="reset_proxy_header" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetProxyHeader"></a>

```python
def reset_proxy_header() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyId">proxy_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference">ComputeTargetTcpProxyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.backendServiceInput">backend_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyBindInput">proxy_bind_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyHeaderInput">proxy_header_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.backendService">backend_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyBind">proxy_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyHeader">proxy_header</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `proxy_id`<sup>Required</sup> <a name="proxy_id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyId"></a>

```python
proxy_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.timeouts"></a>

```python
timeouts: ComputeTargetTcpProxyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference">ComputeTargetTcpProxyTimeoutsOutputReference</a>

---

##### `backend_service_input`<sup>Optional</sup> <a name="backend_service_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.backendServiceInput"></a>

```python
backend_service_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `proxy_bind_input`<sup>Optional</sup> <a name="proxy_bind_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyBindInput"></a>

```python
proxy_bind_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_header_input`<sup>Optional</sup> <a name="proxy_header_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyHeaderInput"></a>

```python
proxy_header_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeTargetTcpProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a>]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `proxy_bind`<sup>Required</sup> <a name="proxy_bind" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyBind"></a>

```python
proxy_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `proxy_header`<sup>Required</sup> <a name="proxy_header" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetTcpProxyConfig <a name="ComputeTargetTcpProxyConfig" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backend_service: str,
  name: str,
  description: str = None,
  id: str = None,
  project: str = None,
  proxy_bind: typing.Union[bool, IResolvable] = None,
  proxy_header: str = None,
  timeouts: ComputeTargetTcpProxyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.backendService">backend_service</a></code> | <code>str</code> | A reference to the BackendService resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#id ComputeTargetTcpProxy#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#project ComputeTargetTcpProxy#project}. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.proxyBind">proxy_bind</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.proxyHeader">proxy_header</a></code> | <code>str</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backend_service`<sup>Required</sup> <a name="backend_service" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.backendService"></a>

```python
backend_service: str
```

- *Type:* str

A reference to the BackendService resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#backend_service ComputeTargetTcpProxy#backend_service}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#name ComputeTargetTcpProxy#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#description ComputeTargetTcpProxy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#id ComputeTargetTcpProxy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#project ComputeTargetTcpProxy#project}.

---

##### `proxy_bind`<sup>Optional</sup> <a name="proxy_bind" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.proxyBind"></a>

```python
proxy_bind: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This field only applies when the forwarding rule that references this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#proxy_bind ComputeTargetTcpProxy#proxy_bind}

---

##### `proxy_header`<sup>Optional</sup> <a name="proxy_header" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.proxyHeader"></a>

```python
proxy_header: str
```

- *Type:* str

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#proxy_header ComputeTargetTcpProxy#proxy_header}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyConfig.property.timeouts"></a>

```python
timeouts: ComputeTargetTcpProxyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#timeouts ComputeTargetTcpProxy#timeouts}

---

### ComputeTargetTcpProxyTimeouts <a name="ComputeTargetTcpProxyTimeouts" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#create ComputeTargetTcpProxy#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#delete ComputeTargetTcpProxy#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#update ComputeTargetTcpProxy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#create ComputeTargetTcpProxy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#delete ComputeTargetTcpProxy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/compute_target_tcp_proxy#update ComputeTargetTcpProxy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetTcpProxyTimeoutsOutputReference <a name="ComputeTargetTcpProxyTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import compute_target_tcp_proxy

computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeTargetTcpProxyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.computeTargetTcpProxy.ComputeTargetTcpProxyTimeouts">ComputeTargetTcpProxyTimeouts</a>]

---



