# `computeNetwork` Submodule <a name="`computeNetwork` Submodule" id="@cdktf/provider-google.computeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetwork <a name="ComputeNetwork" id="@cdktf/provider-google.computeNetwork.ComputeNetwork"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

computenetwork.NewComputeNetwork(scope Construct, id *string, config ComputeNetworkConfig) ComputeNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig">ComputeNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig">ComputeNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetAutoCreateSubnetworks">ResetAutoCreateSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDeleteDefaultRoutesOnCreate">ResetDeleteDefaultRoutesOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetEnableUlaInternalIpv6">ResetEnableUlaInternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetInternalIpv6Range">ResetInternalIpv6Range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder">ResetNetworkFirewallPolicyEnforcementOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetRoutingMode">ResetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.putTimeouts"></a>

```go
func PutTimeouts(value ComputeNetworkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

---

##### `ResetAutoCreateSubnetworks` <a name="ResetAutoCreateSubnetworks" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetAutoCreateSubnetworks"></a>

```go
func ResetAutoCreateSubnetworks()
```

##### `ResetDeleteDefaultRoutesOnCreate` <a name="ResetDeleteDefaultRoutesOnCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDeleteDefaultRoutesOnCreate"></a>

```go
func ResetDeleteDefaultRoutesOnCreate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableUlaInternalIpv6` <a name="ResetEnableUlaInternalIpv6" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetEnableUlaInternalIpv6"></a>

```go
func ResetEnableUlaInternalIpv6()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetInternalIpv6Range` <a name="ResetInternalIpv6Range" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetInternalIpv6Range"></a>

```go
func ResetInternalIpv6Range()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetNetworkFirewallPolicyEnforcementOrder` <a name="ResetNetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder"></a>

```go
func ResetNetworkFirewallPolicyEnforcementOrder()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRoutingMode` <a name="ResetRoutingMode" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetRoutingMode"></a>

```go
func ResetRoutingMode()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

computenetwork.ComputeNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

computenetwork.ComputeNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

computenetwork.ComputeNetwork_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.gatewayIpv4">GatewayIpv4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference">ComputeNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworksInput">AutoCreateSubnetworksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreateInput">DeleteDefaultRoutesOnCreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6Input">EnableUlaInternalIpv6Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6RangeInput">InternalIpv6RangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput">NetworkFirewallPolicyEnforcementOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingModeInput">RoutingModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworks">AutoCreateSubnetworks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreate">DeleteDefaultRoutesOnCreate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6">EnableUlaInternalIpv6</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6Range">InternalIpv6Range</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrder">NetworkFirewallPolicyEnforcementOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingMode">RoutingMode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayIpv4`<sup>Required</sup> <a name="GatewayIpv4" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.gatewayIpv4"></a>

```go
func GatewayIpv4() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeouts"></a>

```go
func Timeouts() ComputeNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference">ComputeNetworkTimeoutsOutputReference</a>

---

##### `AutoCreateSubnetworksInput`<sup>Optional</sup> <a name="AutoCreateSubnetworksInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworksInput"></a>

```go
func AutoCreateSubnetworksInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteDefaultRoutesOnCreateInput`<sup>Optional</sup> <a name="DeleteDefaultRoutesOnCreateInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreateInput"></a>

```go
func DeleteDefaultRoutesOnCreateInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableUlaInternalIpv6Input`<sup>Optional</sup> <a name="EnableUlaInternalIpv6Input" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6Input"></a>

```go
func EnableUlaInternalIpv6Input() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalIpv6RangeInput`<sup>Optional</sup> <a name="InternalIpv6RangeInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6RangeInput"></a>

```go
func InternalIpv6RangeInput() *string
```

- *Type:* *string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyEnforcementOrderInput`<sup>Optional</sup> <a name="NetworkFirewallPolicyEnforcementOrderInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput"></a>

```go
func NetworkFirewallPolicyEnforcementOrderInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoutingModeInput`<sup>Optional</sup> <a name="RoutingModeInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingModeInput"></a>

```go
func RoutingModeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoCreateSubnetworks`<sup>Required</sup> <a name="AutoCreateSubnetworks" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.autoCreateSubnetworks"></a>

```go
func AutoCreateSubnetworks() interface{}
```

- *Type:* interface{}

---

##### `DeleteDefaultRoutesOnCreate`<sup>Required</sup> <a name="DeleteDefaultRoutesOnCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.deleteDefaultRoutesOnCreate"></a>

```go
func DeleteDefaultRoutesOnCreate() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableUlaInternalIpv6`<sup>Required</sup> <a name="EnableUlaInternalIpv6" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.enableUlaInternalIpv6"></a>

```go
func EnableUlaInternalIpv6() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalIpv6Range`<sup>Required</sup> <a name="InternalIpv6Range" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.internalIpv6Range"></a>

```go
func InternalIpv6Range() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkFirewallPolicyEnforcementOrder`<sup>Required</sup> <a name="NetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.networkFirewallPolicyEnforcementOrder"></a>

```go
func NetworkFirewallPolicyEnforcementOrder() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RoutingMode`<sup>Required</sup> <a name="RoutingMode" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.routingMode"></a>

```go
func RoutingMode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetwork.ComputeNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkConfig <a name="ComputeNetworkConfig" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

&computenetwork.ComputeNetworkConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AutoCreateSubnetworks: interface{},
	DeleteDefaultRoutesOnCreate: interface{},
	Description: *string,
	EnableUlaInternalIpv6: interface{},
	Id: *string,
	InternalIpv6Range: *string,
	Mtu: *f64,
	NetworkFirewallPolicyEnforcementOrder: *string,
	Project: *string,
	RoutingMode: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeNetwork.ComputeNetworkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.autoCreateSubnetworks">AutoCreateSubnetworks</a></code> | <code>interface{}</code> | When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteDefaultRoutesOnCreate">DeleteDefaultRoutesOnCreate</a></code> | <code>interface{}</code> | If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. The resource must be recreated to modify this field. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.enableUlaInternalIpv6">EnableUlaInternalIpv6</a></code> | <code>interface{}</code> | Enable ULA internal ipv6 on this network. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#id ComputeNetwork#id}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.internalIpv6Range">InternalIpv6Range</a></code> | <code>*string</code> | When enabling ula internal ipv6, caller optionally can specify the /48 range  they want from the google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum Transmission Unit in bytes. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder">NetworkFirewallPolicyEnforcementOrder</a></code> | <code>*string</code> | Set the order that Firewall Rules and Firewall Policies are evaluated. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#project ComputeNetwork#project}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.routingMode">RoutingMode</a></code> | <code>*string</code> | The network-wide routing mode to use. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#name ComputeNetwork#name}

---

##### `AutoCreateSubnetworks`<sup>Optional</sup> <a name="AutoCreateSubnetworks" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.autoCreateSubnetworks"></a>

```go
AutoCreateSubnetworks interface{}
```

- *Type:* interface{}

When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#auto_create_subnetworks ComputeNetwork#auto_create_subnetworks}

---

##### `DeleteDefaultRoutesOnCreate`<sup>Optional</sup> <a name="DeleteDefaultRoutesOnCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.deleteDefaultRoutesOnCreate"></a>

```go
DeleteDefaultRoutesOnCreate interface{}
```

- *Type:* interface{}

If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#delete_default_routes_on_create ComputeNetwork#delete_default_routes_on_create}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. The resource must be recreated to modify this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#description ComputeNetwork#description}

---

##### `EnableUlaInternalIpv6`<sup>Optional</sup> <a name="EnableUlaInternalIpv6" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.enableUlaInternalIpv6"></a>

```go
EnableUlaInternalIpv6 interface{}
```

- *Type:* interface{}

Enable ULA internal ipv6 on this network.

Enabling this feature will assign
a /48 from google defined ULA prefix fd20::/20.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#enable_ula_internal_ipv6 ComputeNetwork#enable_ula_internal_ipv6}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#id ComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalIpv6Range`<sup>Optional</sup> <a name="InternalIpv6Range" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.internalIpv6Range"></a>

```go
InternalIpv6Range *string
```

- *Type:* *string

When enabling ula internal ipv6, caller optionally can specify the /48 range  they want from the google defined ULA prefix fd20::/20.

The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#internal_ipv6_range ComputeNetwork#internal_ipv6_range}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum Transmission Unit in bytes.

The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
with varying MTUs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#mtu ComputeNetwork#mtu}

---

##### `NetworkFirewallPolicyEnforcementOrder`<sup>Optional</sup> <a name="NetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder"></a>

```go
NetworkFirewallPolicyEnforcementOrder *string
```

- *Type:* *string

Set the order that Firewall Rules and Firewall Policies are evaluated.

Needs to be either 'AFTER_CLASSIC_FIREWALL' or 'BEFORE_CLASSIC_FIREWALL' Default 'AFTER_CLASSIC_FIREWALL' Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#network_firewall_policy_enforcement_order ComputeNetwork#network_firewall_policy_enforcement_order}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#project ComputeNetwork#project}.

---

##### `RoutingMode`<sup>Optional</sup> <a name="RoutingMode" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.routingMode"></a>

```go
RoutingMode *string
```

- *Type:* *string

The network-wide routing mode to use.

If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#routing_mode ComputeNetwork#routing_mode}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetworkConfig.property.timeouts"></a>

```go
Timeouts ComputeNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts">ComputeNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#timeouts ComputeNetwork#timeouts}

---

### ComputeNetworkTimeouts <a name="ComputeNetworkTimeouts" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

&computenetwork.ComputeNetworkTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#create ComputeNetwork#create}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#delete ComputeNetwork#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#update ComputeNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#create ComputeNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#delete ComputeNetwork#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network#update ComputeNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkTimeoutsOutputReference <a name="ComputeNetworkTimeoutsOutputReference" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computenetwork"

computenetwork.NewComputeNetworkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeNetworkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetwork.ComputeNetworkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



