# `google_service_networking_peered_dns_domain`

Refer to the Terraform Registory for docs: [`google_service_networking_peered_dns_domain`](https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain).

# `serviceNetworkingPeeredDnsDomain` Submodule <a name="`serviceNetworkingPeeredDnsDomain` Submodule" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceNetworkingPeeredDnsDomain <a name="ServiceNetworkingPeeredDnsDomain" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain google_service_networking_peered_dns_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_suffix: str,
  name: str,
  network: str,
  id: str = None,
  project: str = None,
  service: str = None,
  timeouts: ServiceNetworkingPeeredDnsDomainTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.dnsSuffix">dns_suffix</a></code> | <code>str</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.network">network</a></code> | <code>str</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.dnsSuffix"></a>

- *Type:* str

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#dns_suffix ServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.name"></a>

- *Type:* str

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#name ServiceNetworkingPeeredDnsDomain#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.network"></a>

- *Type:* str

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#network ServiceNetworkingPeeredDnsDomain#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#project ServiceNetworkingPeeredDnsDomain#project}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.service"></a>

- *Type:* str

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#service ServiceNetworkingPeeredDnsDomain#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#timeouts ServiceNetworkingPeeredDnsDomain#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceNetworkingPeeredDnsDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceNetworkingPeeredDnsDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceNetworkingPeeredDnsDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceNetworkingPeeredDnsDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput">dns_suffix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeouts"></a>

```python
timeouts: ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference">ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference</a>

---

##### `dns_suffix_input`<sup>Optional</sup> <a name="dns_suffix_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffixInput"></a>

```python
dns_suffix_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceNetworkingPeeredDnsDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceNetworkingPeeredDnsDomainConfig <a name="ServiceNetworkingPeeredDnsDomainConfig" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_suffix: str,
  name: str,
  network: str,
  id: str = None,
  project: str = None,
  service: str = None,
  timeouts: ServiceNetworkingPeeredDnsDomainTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix">dns_suffix</a></code> | <code>str</code> | The DNS domain name suffix of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.name">name</a></code> | <code>str</code> | Name of the peered DNS domain. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.network">network</a></code> | <code>str</code> | Network in the consumer project to peer with. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.project">project</a></code> | <code>str</code> | The ID of the project that the service account will be created in. Defaults to the provider project configuration. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.service">service</a></code> | <code>str</code> | The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_suffix`<sup>Required</sup> <a name="dns_suffix" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.dnsSuffix"></a>

```python
dns_suffix: str
```

- *Type:* str

The DNS domain name suffix of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#dns_suffix ServiceNetworkingPeeredDnsDomain#dns_suffix}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the peered DNS domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#name ServiceNetworkingPeeredDnsDomain#name}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.network"></a>

```python
network: str
```

- *Type:* str

Network in the consumer project to peer with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#network ServiceNetworkingPeeredDnsDomain#network}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#id ServiceNetworkingPeeredDnsDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project that the service account will be created in. Defaults to the provider project configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#project ServiceNetworkingPeeredDnsDomain#project}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to create a peered DNS domain for, e.g. servicenetworking.googleapis.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#service ServiceNetworkingPeeredDnsDomain#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainConfig.property.timeouts"></a>

```python
timeouts: ServiceNetworkingPeeredDnsDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#timeouts ServiceNetworkingPeeredDnsDomain#timeouts}

---

### ServiceNetworkingPeeredDnsDomainTimeouts <a name="ServiceNetworkingPeeredDnsDomainTimeouts" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#create ServiceNetworkingPeeredDnsDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#delete ServiceNetworkingPeeredDnsDomain#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.6.0/docs/resources/service_networking_peered_dns_domain#read ServiceNetworkingPeeredDnsDomain#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference <a name="ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import service_networking_peered_dns_domain

serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceNetworkingPeeredDnsDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.serviceNetworkingPeeredDnsDomain.ServiceNetworkingPeeredDnsDomainTimeouts">ServiceNetworkingPeeredDnsDomainTimeouts</a>]

---



