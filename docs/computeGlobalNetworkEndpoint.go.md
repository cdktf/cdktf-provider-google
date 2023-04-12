# `computeGlobalNetworkEndpoint` Submodule <a name="`computeGlobalNetworkEndpoint` Submodule" id="@cdktf/provider-google.computeGlobalNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalNetworkEndpoint <a name="ComputeGlobalNetworkEndpoint" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint google_compute_global_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

computeglobalnetworkendpoint.NewComputeGlobalNetworkEndpoint(scope Construct, id *string, config ComputeGlobalNetworkEndpointConfig) ComputeGlobalNetworkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig">ComputeGlobalNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig">ComputeGlobalNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetFqdn">ResetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts"></a>

```go
func PutTimeouts(value ComputeGlobalNetworkEndpointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

---

##### `ResetFqdn` <a name="ResetFqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetFqdn"></a>

```go
func ResetFqdn()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

computeglobalnetworkendpoint.ComputeGlobalNetworkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

computeglobalnetworkendpoint.ComputeGlobalNetworkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

computeglobalnetworkendpoint.ComputeGlobalNetworkEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference">ComputeGlobalNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdnInput">FqdnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput">GlobalNetworkEndpointGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup">GlobalNetworkEndpointGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeouts"></a>

```go
func Timeouts() ComputeGlobalNetworkEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference">ComputeGlobalNetworkEndpointTimeoutsOutputReference</a>

---

##### `FqdnInput`<sup>Optional</sup> <a name="FqdnInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdnInput"></a>

```go
func FqdnInput() *string
```

- *Type:* *string

---

##### `GlobalNetworkEndpointGroupInput`<sup>Optional</sup> <a name="GlobalNetworkEndpointGroupInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput"></a>

```go
func GlobalNetworkEndpointGroupInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `GlobalNetworkEndpointGroup`<sup>Required</sup> <a name="GlobalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup"></a>

```go
func GlobalNetworkEndpointGroup() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalNetworkEndpointConfig <a name="ComputeGlobalNetworkEndpointConfig" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

&computeglobalnetworkendpoint.ComputeGlobalNetworkEndpointConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GlobalNetworkEndpointGroup: *string,
	Port: *f64,
	Fqdn: *string,
	Id: *string,
	IpAddress: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup">GlobalNetworkEndpointGroup</a></code> | <code>*string</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.port">Port</a></code> | <code>*f64</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.fqdn">Fqdn</a></code> | <code>*string</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GlobalNetworkEndpointGroup`<sup>Required</sup> <a name="GlobalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup"></a>

```go
GlobalNetworkEndpointGroup *string
```

- *Type:* *string

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#global_network_endpoint_group ComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#port ComputeGlobalNetworkEndpoint#port}

---

##### `Fqdn`<sup>Optional</sup> <a name="Fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.fqdn"></a>

```go
Fqdn *string
```

- *Type:* *string

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#fqdn ComputeGlobalNetworkEndpoint#fqdn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#ip_address ComputeGlobalNetworkEndpoint#ip_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.timeouts"></a>

```go
Timeouts ComputeGlobalNetworkEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#timeouts ComputeGlobalNetworkEndpoint#timeouts}

---

### ComputeGlobalNetworkEndpointTimeouts <a name="ComputeGlobalNetworkEndpointTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

&computeglobalnetworkendpoint.ComputeGlobalNetworkEndpointTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalNetworkEndpointTimeoutsOutputReference <a name="ComputeGlobalNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeglobalnetworkendpoint"

computeglobalnetworkendpoint.NewComputeGlobalNetworkEndpointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeGlobalNetworkEndpointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



