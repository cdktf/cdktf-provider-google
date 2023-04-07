# `computeRouterInterface` Submodule <a name="`computeRouterInterface` Submodule" id="@cdktf/provider-google.computeRouterInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRouterInterface <a name="ComputeRouterInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface google_compute_router_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

computerouterinterface.NewComputeRouterInterface(scope Construct, id *string, config ComputeRouterInterfaceConfig) ComputeRouterInterface
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig">ComputeRouterInterfaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig">ComputeRouterInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetInterconnectAttachment">ResetInterconnectAttachment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpRange">ResetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetPrivateIpAddress">ResetPrivateIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRedundantInterface">ResetRedundantInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetSubnetwork">ResetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetVpnTunnel">ResetVpnTunnel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRouterInterfaceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetId"></a>

```go
func ResetId()
```

##### `ResetInterconnectAttachment` <a name="ResetInterconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetInterconnectAttachment"></a>

```go
func ResetInterconnectAttachment()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetIpRange"></a>

```go
func ResetIpRange()
```

##### `ResetPrivateIpAddress` <a name="ResetPrivateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetPrivateIpAddress"></a>

```go
func ResetPrivateIpAddress()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRedundantInterface` <a name="ResetRedundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRedundantInterface"></a>

```go
func ResetRedundantInterface()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSubnetwork` <a name="ResetSubnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetSubnetwork"></a>

```go
func ResetSubnetwork()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpnTunnel` <a name="ResetVpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.resetVpnTunnel"></a>

```go
func ResetVpnTunnel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

computerouterinterface.ComputeRouterInterface_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

computerouterinterface.ComputeRouterInterface_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

computerouterinterface.ComputeRouterInterface_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference">ComputeRouterInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachmentInput">InterconnectAttachmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRangeInput">IpRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddressInput">PrivateIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterfaceInput">RedundantInterfaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetworkInput">SubnetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnelInput">VpnTunnelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachment">InterconnectAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRange">IpRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterface">RedundantInterface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnel">VpnTunnel</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeouts"></a>

```go
func Timeouts() ComputeRouterInterfaceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference">ComputeRouterInterfaceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterconnectAttachmentInput`<sup>Optional</sup> <a name="InterconnectAttachmentInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachmentInput"></a>

```go
func InterconnectAttachmentInput() *string
```

- *Type:* *string

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRangeInput"></a>

```go
func IpRangeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrivateIpAddressInput`<sup>Optional</sup> <a name="PrivateIpAddressInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddressInput"></a>

```go
func PrivateIpAddressInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RedundantInterfaceInput`<sup>Optional</sup> <a name="RedundantInterfaceInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterfaceInput"></a>

```go
func RedundantInterfaceInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `SubnetworkInput`<sup>Optional</sup> <a name="SubnetworkInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetworkInput"></a>

```go
func SubnetworkInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpnTunnelInput`<sup>Optional</sup> <a name="VpnTunnelInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnelInput"></a>

```go
func VpnTunnelInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterconnectAttachment`<sup>Required</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.interconnectAttachment"></a>

```go
func InterconnectAttachment() *string
```

- *Type:* *string

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.ipRange"></a>

```go
func IpRange() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.privateIpAddress"></a>

```go
func PrivateIpAddress() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RedundantInterface`<sup>Required</sup> <a name="RedundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.redundantInterface"></a>

```go
func RedundantInterface() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `VpnTunnel`<sup>Required</sup> <a name="VpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.vpnTunnel"></a>

```go
func VpnTunnel() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterface.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouterInterfaceConfig <a name="ComputeRouterInterfaceConfig" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

&computerouterinterface.ComputeRouterInterfaceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Router: *string,
	Id: *string,
	InterconnectAttachment: *string,
	IpRange: *string,
	PrivateIpAddress: *string,
	Project: *string,
	RedundantInterface: *string,
	Region: *string,
	Subnetwork: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRouterInterface.ComputeRouterInterfaceTimeouts,
	VpnTunnel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.name">Name</a></code> | <code>*string</code> | A unique name for the interface, required by GCE. Changing this forces a new interface to be created. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.router">Router</a></code> | <code>*string</code> | The name of the router this interface will be attached to. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#id ComputeRouterInterface#id}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.interconnectAttachment">InterconnectAttachment</a></code> | <code>*string</code> | The name or resource link to the VLAN interconnect for this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipRange">IpRange</a></code> | <code>*string</code> | The IP address and range of the interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.privateIpAddress">PrivateIpAddress</a></code> | <code>*string</code> | The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which this interface's router belongs. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.redundantInterface">RedundantInterface</a></code> | <code>*string</code> | The name of the interface that is redundant to this interface. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.region">Region</a></code> | <code>*string</code> | The region this interface's router sits in. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.vpnTunnel">VpnTunnel</a></code> | <code>*string</code> | The name or resource link to the VPN tunnel this interface will be linked to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name for the interface, required by GCE. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#name ComputeRouterInterface#name}

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The name of the router this interface will be attached to.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#router ComputeRouterInterface#router}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#id ComputeRouterInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InterconnectAttachment`<sup>Optional</sup> <a name="InterconnectAttachment" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.interconnectAttachment"></a>

```go
InterconnectAttachment *string
```

- *Type:* *string

The name or resource link to the VLAN interconnect for this interface.

Changing this forces a new interface to be created. Only one of interconnect_attachment, subnetwork or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#interconnect_attachment ComputeRouterInterface#interconnect_attachment}

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.ipRange"></a>

```go
IpRange *string
```

- *Type:* *string

The IP address and range of the interface.

The IP range must be in the RFC3927 link-local IP space. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#ip_range ComputeRouterInterface#ip_range}

---

##### `PrivateIpAddress`<sup>Optional</sup> <a name="PrivateIpAddress" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.privateIpAddress"></a>

```go
PrivateIpAddress *string
```

- *Type:* *string

The regional private internal IP address that is used to establish BGP sessions to a VM instance acting as a third-party Router Appliance.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#private_ip_address ComputeRouterInterface#private_ip_address}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which this interface's router belongs.

If it is not provided, the provider project is used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#project ComputeRouterInterface#project}

---

##### `RedundantInterface`<sup>Optional</sup> <a name="RedundantInterface" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.redundantInterface"></a>

```go
RedundantInterface *string
```

- *Type:* *string

The name of the interface that is redundant to this interface.

Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#redundant_interface ComputeRouterInterface#redundant_interface}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region this interface's router sits in.

If not specified, the project region will be used. Changing this forces a new interface to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#region ComputeRouterInterface#region}

---

##### `Subnetwork`<sup>Optional</sup> <a name="Subnetwork" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.subnetwork"></a>

```go
Subnetwork *string
```

- *Type:* *string

The URI of the subnetwork resource that this interface belongs to, which must be in the same region as the Cloud Router.

Changing this forces a new interface to be created. Only one of subnetwork, interconnect_attachment or vpn_tunnel can be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#subnetwork ComputeRouterInterface#subnetwork}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.timeouts"></a>

```go
Timeouts ComputeRouterInterfaceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts">ComputeRouterInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#timeouts ComputeRouterInterface#timeouts}

---

##### `VpnTunnel`<sup>Optional</sup> <a name="VpnTunnel" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceConfig.property.vpnTunnel"></a>

```go
VpnTunnel *string
```

- *Type:* *string

The name or resource link to the VPN tunnel this interface will be linked to.

Changing this forces a new interface to be created. Only one of vpn_tunnel, interconnect_attachment or subnetwork can be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#vpn_tunnel ComputeRouterInterface#vpn_tunnel}

---

### ComputeRouterInterfaceTimeouts <a name="ComputeRouterInterfaceTimeouts" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

&computerouterinterface.ComputeRouterInterfaceTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#create ComputeRouterInterface#create}. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#delete ComputeRouterInterface#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#create ComputeRouterInterface#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_interface#delete ComputeRouterInterface#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRouterInterfaceTimeoutsOutputReference <a name="ComputeRouterInterfaceTimeoutsOutputReference" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computerouterinterface"

computerouterinterface.NewComputeRouterInterfaceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRouterInterfaceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRouterInterface.ComputeRouterInterfaceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



