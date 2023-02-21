# `vpcAccessConnector` Submodule <a name="`vpcAccessConnector` Submodule" id="@cdktf/provider-google.vpcAccessConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcAccessConnector <a name="VpcAccessConnector" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector google_vpc_access_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

vpcaccessconnector.NewVpcAccessConnector(scope Construct, id *string, config VpcAccessConnectorConfig) VpcAccessConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig">VpcAccessConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig">VpcAccessConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet">PutSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput">ResetMaxThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput">ResetMinThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet">ResetSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSubnet` <a name="PutSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet"></a>

```go
func PutSubnet(value VpcAccessConnectorSubnet)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putSubnet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts"></a>

```go
func PutTimeouts(value VpcAccessConnectorTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetId"></a>

```go
func ResetId()
```

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetIpCidrRange"></a>

```go
func ResetIpCidrRange()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMachineType"></a>

```go
func ResetMachineType()
```

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMaxThroughput` <a name="ResetMaxThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMaxThroughput"></a>

```go
func ResetMaxThroughput()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetMinThroughput` <a name="ResetMinThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetMinThroughput"></a>

```go
func ResetMinThroughput()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetNetwork"></a>

```go
func ResetNetwork()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSubnet` <a name="ResetSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetSubnet"></a>

```go
func ResetSubnet()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

vpcaccessconnector.VpcAccessConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

vpcaccessconnector.VpcAccessConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

vpcaccessconnector.VpcAccessConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet">Subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput">MachineTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput">MaxThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput">MinThroughputInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput">SubnetInput</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput">MaxThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput">MinThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Subnet`<sup>Required</sup> <a name="Subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnet"></a>

```go
func Subnet() VpcAccessConnectorSubnetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference">VpcAccessConnectorSubnetOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeouts"></a>

```go
func Timeouts() VpcAccessConnectorTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference">VpcAccessConnectorTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineTypeInput"></a>

```go
func MachineTypeInput() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MaxThroughputInput`<sup>Optional</sup> <a name="MaxThroughputInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughputInput"></a>

```go
func MaxThroughputInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinThroughputInput`<sup>Optional</sup> <a name="MinThroughputInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughputInput"></a>

```go
func MinThroughputInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SubnetInput`<sup>Optional</sup> <a name="SubnetInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.subnetInput"></a>

```go
func SubnetInput() VpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MaxThroughput`<sup>Required</sup> <a name="MaxThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.maxThroughput"></a>

```go
func MaxThroughput() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `MinThroughput`<sup>Required</sup> <a name="MinThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.minThroughput"></a>

```go
func MinThroughput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcAccessConnectorConfig <a name="VpcAccessConnectorConfig" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

&vpcaccessconnector.VpcAccessConnectorConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	IpCidrRange: *string,
	MachineType: *string,
	MaxInstances: *f64,
	MaxThroughput: *f64,
	MinInstances: *f64,
	MinThroughput: *f64,
	Network: *string,
	Project: *string,
	Region: *string,
	Subnet: github.com/cdktf/cdktf-provider-google-go/google.vpcAccessConnector.VpcAccessConnectorSubnet,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vpcAccessConnector.VpcAccessConnectorTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name">Name</a></code> | <code>*string</code> | The name of the resource (Max 25 characters). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#id VpcAccessConnector#id}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType">MachineType</a></code> | <code>*string</code> | Machine type of VM Instance underlying connector. Default is e2-micro. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput">MaxThroughput</a></code> | <code>*f64</code> | Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Minimum value of instances in autoscaling group underlying the connector. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput">MinThroughput</a></code> | <code>*f64</code> | Minimum throughput of the connector in Mbps. Default and min is 200. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network">Network</a></code> | <code>*string</code> | Name or self_link of the VPC network. Required if 'ip_cidr_range' is set. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#project VpcAccessConnector#project}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region">Region</a></code> | <code>*string</code> | Region where the VPC Access connector resides. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet">Subnet</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | subnet block. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the resource (Max 25 characters).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#name VpcAccessConnector#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#id VpcAccessConnector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.machineType"></a>

```go
MachineType *string
```

- *Type:* *string

Machine type of VM Instance underlying connector. Default is e2-micro.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#machine_type VpcAccessConnector#machine_type}

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#max_instances VpcAccessConnector#max_instances}

---

##### `MaxThroughput`<sup>Optional</sup> <a name="MaxThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.maxThroughput"></a>

```go
MaxThroughput *f64
```

- *Type:* *f64

Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Minimum value of instances in autoscaling group underlying the connector.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#min_instances VpcAccessConnector#min_instances}

---

##### `MinThroughput`<sup>Optional</sup> <a name="MinThroughput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.minThroughput"></a>

```go
MinThroughput *f64
```

- *Type:* *f64

Minimum throughput of the connector in Mbps. Default and min is 200.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#network VpcAccessConnector#network}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#project VpcAccessConnector#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where the VPC Access connector resides. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#region VpcAccessConnector#region}

---

##### `Subnet`<sup>Optional</sup> <a name="Subnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.subnet"></a>

```go
Subnet VpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

subnet block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#subnet VpcAccessConnector#subnet}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorConfig.property.timeouts"></a>

```go
Timeouts VpcAccessConnectorTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts">VpcAccessConnectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#timeouts VpcAccessConnector#timeouts}

---

### VpcAccessConnectorSubnet <a name="VpcAccessConnectorSubnet" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

&vpcaccessconnector.VpcAccessConnectorSubnet {
	Name: *string,
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name">Name</a></code> | <code>*string</code> | Subnet name (relative, not fully qualified). |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId">ProjectId</a></code> | <code>*string</code> | Project in which the subnet exists. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.name"></a>

```go
Name *string
```

- *Type:* *string

Subnet name (relative, not fully qualified).

E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#name VpcAccessConnector#name}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Project in which the subnet exists.

If not set, this project is assumed to be the project for which the connector create request was issued.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#project_id VpcAccessConnector#project_id}

---

### VpcAccessConnectorTimeouts <a name="VpcAccessConnectorTimeouts" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

&vpcaccessconnector.VpcAccessConnectorTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#create VpcAccessConnector#create}. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#delete VpcAccessConnector#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#create VpcAccessConnector#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#delete VpcAccessConnector#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcAccessConnectorSubnetOutputReference <a name="VpcAccessConnectorSubnetOutputReference" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

vpcaccessconnector.NewVpcAccessConnectorSubnetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcAccessConnectorSubnetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnetOutputReference.property.internalValue"></a>

```go
func InternalValue() VpcAccessConnectorSubnet
```

- *Type:* <a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorSubnet">VpcAccessConnectorSubnet</a>

---


### VpcAccessConnectorTimeoutsOutputReference <a name="VpcAccessConnectorTimeoutsOutputReference" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vpcaccessconnector"

vpcaccessconnector.NewVpcAccessConnectorTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpcAccessConnectorTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vpcAccessConnector.VpcAccessConnectorTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



