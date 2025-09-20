# `networkServicesLbRouteExtension` Submodule <a name="`networkServicesLbRouteExtension` Submodule" id="@cdktf/provider-google.networkServicesLbRouteExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesLbRouteExtension <a name="NetworkServicesLbRouteExtension" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension google_network_services_lb_route_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtension(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_chains: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChains]],
  forwarding_rules: typing.List[str],
  load_balancing_scheme: str,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesLbRouteExtensionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.extensionChains">extension_chains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.extensionChains"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#extension_chains NetworkServicesLbRouteExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.forwardingRules"></a>

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#forwarding_rules NetworkServicesLbRouteExtension#forwarding_rules}

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#load_balancing_scheme NetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.location"></a>

- *Type:* str

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#location NetworkServicesLbRouteExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.name"></a>

- *Type:* str

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#description NetworkServicesLbRouteExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#labels NetworkServicesLbRouteExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#timeouts NetworkServicesLbRouteExtension#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putExtensionChains">put_extension_chains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_extension_chains` <a name="put_extension_chains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putExtensionChains"></a>

```python
def put_extension_chains(
  value: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChains]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putExtensionChains.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#create NetworkServicesLbRouteExtension#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#delete NetworkServicesLbRouteExtension#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#update NetworkServicesLbRouteExtension#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesLbRouteExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesLbRouteExtension to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesLbRouteExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesLbRouteExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChains">extension_chains</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList">NetworkServicesLbRouteExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference">NetworkServicesLbRouteExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChainsInput">extension_chains_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRulesInput">forwarding_rules_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingSchemeInput">load_balancing_scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChains"></a>

```python
extension_chains: NetworkServicesLbRouteExtensionExtensionChainsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList">NetworkServicesLbRouteExtensionExtensionChainsList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeouts"></a>

```python
timeouts: NetworkServicesLbRouteExtensionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference">NetworkServicesLbRouteExtensionTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `extension_chains_input`<sup>Optional</sup> <a name="extension_chains_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.extensionChainsInput"></a>

```python
extension_chains_input: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]

---

##### `forwarding_rules_input`<sup>Optional</sup> <a name="forwarding_rules_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRulesInput"></a>

```python
forwarding_rules_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme_input`<sup>Optional</sup> <a name="load_balancing_scheme_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingSchemeInput"></a>

```python
load_balancing_scheme_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesLbRouteExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtension.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesLbRouteExtensionConfig <a name="NetworkServicesLbRouteExtensionConfig" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  extension_chains: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChains]],
  forwarding_rules: typing.List[str],
  load_balancing_scheme: str,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: NetworkServicesLbRouteExtensionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.extensionChains">extension_chains</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]</code> | extension_chains block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forwardingRules">forwarding_rules</a></code> | <code>typing.List[str]</code> | A list of references to the forwarding rules to which this service extension is attached to. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme">load_balancing_scheme</a></code> | <code>str</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.location">location</a></code> | <code>str</code> | The location of the route extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.name">name</a></code> | <code>str</code> | Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with the LbRouteExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `extension_chains`<sup>Required</sup> <a name="extension_chains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.extensionChains"></a>

```python
extension_chains: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#extension_chains NetworkServicesLbRouteExtension#extension_chains}

---

##### `forwarding_rules`<sup>Required</sup> <a name="forwarding_rules" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.forwardingRules"></a>

```python
forwarding_rules: typing.List[str]
```

- *Type:* typing.List[str]

A list of references to the forwarding rules to which this service extension is attached to.

At least one forwarding rule is required. There can be only one LbRouteExtension resource per forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#forwarding_rules NetworkServicesLbRouteExtension#forwarding_rules}

---

##### `load_balancing_scheme`<sup>Required</sup> <a name="load_balancing_scheme" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.loadBalancingScheme"></a>

```python
load_balancing_scheme: str
```

- *Type:* str

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Choosing a load balancer](https://cloud.google.com/load-balancing/docs/backend-service) and
[Supported application load balancers](https://cloud.google.com/service-extensions/docs/callouts-overview#supported-lbs). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#load_balancing_scheme NetworkServicesLbRouteExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the route extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#location NetworkServicesLbRouteExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the LbRouteExtension resource in the following format: projects/{project}/locations/{location}/lbRouteExtensions/{lbRouteExtension}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#description NetworkServicesLbRouteExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#id NetworkServicesLbRouteExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with the LbRouteExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#labels NetworkServicesLbRouteExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#project NetworkServicesLbRouteExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesLbRouteExtensionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#timeouts NetworkServicesLbRouteExtension#timeouts}

---

### NetworkServicesLbRouteExtensionExtensionChains <a name="NetworkServicesLbRouteExtensionExtensionChains" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains(
  extensions: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChainsExtensions]],
  match_condition: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.extensions">extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]</code> | extensions block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.name">name</a></code> | <code>str</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.extensions"></a>

```python
extensions: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#extensions NetworkServicesLbRouteExtension#extensions}

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.matchCondition"></a>

```python
match_condition: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#match_condition NetworkServicesLbRouteExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

### NetworkServicesLbRouteExtensionExtensionChainsExtensions <a name="NetworkServicesLbRouteExtensionExtensionChainsExtensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions(
  name: str,
  service: str,
  authority: str = None,
  fail_open: typing.Union[bool, IResolvable] = None,
  forward_headers: typing.List[str] = None,
  timeout: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>str</code> | The name for this extension. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>str</code> | The reference to the service that runs the extension. Must be a reference to a backend service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority">authority</a></code> | <code>str</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout">timeout</a></code> | <code>str</code> | Specifies the timeout for each individual message on the stream. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#name NetworkServicesLbRouteExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.service"></a>

```python
service: str
```

- *Type:* str

The reference to the service that runs the extension. Must be a reference to a backend service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#service NetworkServicesLbRouteExtension#service}

---

##### `authority`<sup>Optional</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.authority"></a>

```python
authority: str
```

- *Type:* str

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#authority NetworkServicesLbRouteExtension#authority}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#fail_open NetworkServicesLbRouteExtension#fail_open}

---

##### `forward_headers`<sup>Optional</sup> <a name="forward_headers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#forward_headers NetworkServicesLbRouteExtension#forward_headers}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

Specifies the timeout for each individual message on the stream.

The timeout must be between 10-1000 milliseconds.
A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#timeout NetworkServicesLbRouteExtension#timeout}

---

### NetworkServicesLbRouteExtensionExtensionChainsMatchCondition <a name="NetworkServicesLbRouteExtensionExtensionChainsMatchCondition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition(
  cel_expression: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression">cel_expression</a></code> | <code>str</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#cel_expression NetworkServicesLbRouteExtension#cel_expression}

---

### NetworkServicesLbRouteExtensionTimeouts <a name="NetworkServicesLbRouteExtensionTimeouts" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#create NetworkServicesLbRouteExtension#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#delete NetworkServicesLbRouteExtension#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#update NetworkServicesLbRouteExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#create NetworkServicesLbRouteExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#delete NetworkServicesLbRouteExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#update NetworkServicesLbRouteExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesLbRouteExtensionExtensionChainsExtensionsList <a name="NetworkServicesLbRouteExtensionExtensionChainsExtensionsList" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]

---


### NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference <a name="NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority">reset_authority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">reset_forward_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authority` <a name="reset_authority" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetAuthority"></a>

```python
def reset_authority() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_forward_headers` <a name="reset_forward_headers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```python
def reset_forward_headers() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput">authority_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forward_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput">timeout_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority">authority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen">fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forward_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout">timeout</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authority_input`<sup>Optional</sup> <a name="authority_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authorityInput"></a>

```python
authority_input: str
```

- *Type:* str

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```python
fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers_input`<sup>Optional</sup> <a name="forward_headers_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```python
forward_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeoutInput"></a>

```python
timeout_input: str
```

- *Type:* str

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.authority"></a>

```python
authority: str
```

- *Type:* str

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```python
fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `forward_headers`<sup>Required</sup> <a name="forward_headers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```python
forward_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.timeout"></a>

```python
timeout: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesLbRouteExtensionExtensionChainsExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]

---


### NetworkServicesLbRouteExtensionExtensionChainsList <a name="NetworkServicesLbRouteExtensionExtensionChainsList" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkServicesLbRouteExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChains]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]]

---


### NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference <a name="NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">cel_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">cel_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cel_expression_input`<sup>Optional</sup> <a name="cel_expression_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```python
cel_expression_input: str
```

- *Type:* str

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```python
cel_expression: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```python
internal_value: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---


### NetworkServicesLbRouteExtensionExtensionChainsOutputReference <a name="NetworkServicesLbRouteExtensionExtensionChainsOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions">put_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition">put_match_condition</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_extensions` <a name="put_extensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions"></a>

```python
def put_extensions(
  value: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChainsExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]

---

##### `put_match_condition` <a name="put_match_condition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```python
def put_match_condition(
  cel_expression: str
) -> None
```

###### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.putMatchCondition.parameter.celExpression"></a>

- *Type:* str

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/network_services_lb_route_extension#cel_expression NetworkServicesLbRouteExtension#cel_expression}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList">NetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition">match_condition</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput">extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput">match_condition_input</a></code> | <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensions"></a>

```python
extensions: NetworkServicesLbRouteExtensionExtensionChainsExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensionsList">NetworkServicesLbRouteExtensionExtensionChainsExtensionsList</a>

---

##### `match_condition`<sup>Required</sup> <a name="match_condition" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```python
match_condition: NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference">NetworkServicesLbRouteExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensions_input`<sup>Optional</sup> <a name="extensions_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```python
extensions_input: typing.Union[IResolvable, typing.List[NetworkServicesLbRouteExtensionExtensionChainsExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsExtensions">NetworkServicesLbRouteExtensionExtensionChainsExtensions</a>]]

---

##### `match_condition_input`<sup>Optional</sup> <a name="match_condition_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```python
match_condition_input: NetworkServicesLbRouteExtensionExtensionChainsMatchCondition
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsMatchCondition">NetworkServicesLbRouteExtensionExtensionChainsMatchCondition</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChainsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesLbRouteExtensionExtensionChains]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionExtensionChains">NetworkServicesLbRouteExtensionExtensionChains</a>]

---


### NetworkServicesLbRouteExtensionTimeoutsOutputReference <a name="NetworkServicesLbRouteExtensionTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_lb_route_extension

networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesLbRouteExtensionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesLbRouteExtension.NetworkServicesLbRouteExtensionTimeouts">NetworkServicesLbRouteExtensionTimeouts</a>]

---



