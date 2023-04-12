# `computeExternalVpnGateway` Submodule <a name="`computeExternalVpnGateway` Submodule" id="@cdktf/provider-google.computeExternalVpnGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeExternalVpnGateway <a name="ComputeExternalVpnGateway" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway google_compute_external_vpn_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGateway(scope Construct, id *string, config ComputeExternalVpnGatewayConfig) ComputeExternalVpnGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig">ComputeExternalVpnGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig">ComputeExternalVpnGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface">PutInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetInterface">ResetInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetRedundancyType">ResetRedundancyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInterface` <a name="PutInterface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface"></a>

```go
func PutInterface(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putInterface.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts"></a>

```go
func PutTimeouts(value ComputeExternalVpnGatewayTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetId"></a>

```go
func ResetId()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetInterface"></a>

```go
func ResetInterface()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRedundancyType` <a name="ResetRedundancyType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetRedundancyType"></a>

```go
func ResetRedundancyType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.ComputeExternalVpnGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interface">Interface</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList">ComputeExternalVpnGatewayInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference">ComputeExternalVpnGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interfaceInput">InterfaceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyTypeInput">RedundancyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyType">RedundancyType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interface"></a>

```go
func Interface() ComputeExternalVpnGatewayInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList">ComputeExternalVpnGatewayInterfaceList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeouts"></a>

```go
func Timeouts() ComputeExternalVpnGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference">ComputeExternalVpnGatewayTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.interfaceInput"></a>

```go
func InterfaceInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RedundancyTypeInput`<sup>Optional</sup> <a name="RedundancyTypeInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyTypeInput"></a>

```go
func RedundancyTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RedundancyType`<sup>Required</sup> <a name="RedundancyType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.redundancyType"></a>

```go
func RedundancyType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeExternalVpnGatewayConfig <a name="ComputeExternalVpnGatewayConfig" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Interface: interface{},
	Labels: *map[string]*string,
	Project: *string,
	RedundancyType: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.interface">Interface</a></code> | <code>interface{}</code> | interface block. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels for the external VPN gateway resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#project ComputeExternalVpnGateway#project}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.redundancyType">RedundancyType</a></code> | <code>*string</code> | Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"]. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#name ComputeExternalVpnGateway#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#description ComputeExternalVpnGateway#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.interface"></a>

```go
Interface interface{}
```

- *Type:* interface{}

interface block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#interface ComputeExternalVpnGateway#interface}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels for the external VPN gateway resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#labels ComputeExternalVpnGateway#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#project ComputeExternalVpnGateway#project}.

---

##### `RedundancyType`<sup>Optional</sup> <a name="RedundancyType" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.redundancyType"></a>

```go
RedundancyType *string
```

- *Type:* *string

Indicates the redundancy type of this external VPN gateway Possible values: ["FOUR_IPS_REDUNDANCY", "SINGLE_IP_INTERNALLY_REDUNDANT", "TWO_IPS_REDUNDANCY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#redundancy_type ComputeExternalVpnGateway#redundancy_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayConfig.property.timeouts"></a>

```go
Timeouts ComputeExternalVpnGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts">ComputeExternalVpnGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#timeouts ComputeExternalVpnGateway#timeouts}

---

### ComputeExternalVpnGatewayInterface <a name="ComputeExternalVpnGatewayInterface" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayInterface {
	Id: *f64,
	IpAddress: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.id">Id</a></code> | <code>*f64</code> | The numeric ID for this interface. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipAddress">IpAddress</a></code> | <code>*string</code> | IP address of the interface in the external VPN gateway. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

The numeric ID for this interface.

Allowed values are based on the redundancy type
of this external VPN gateway
'0 - SINGLE_IP_INTERNALLY_REDUNDANT'
'0, 1 - TWO_IPS_REDUNDANCY'
'0, 1, 2, 3 - FOUR_IPS_REDUNDANCY'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#id ComputeExternalVpnGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterface.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

IP address of the interface in the external VPN gateway.

Only IPv4 is supported. This IP address can be either from
your on-premise gateway or another Cloud provider's VPN gateway,
it cannot be an IP address from Google Compute Engine.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#ip_address ComputeExternalVpnGateway#ip_address}

---

### ComputeExternalVpnGatewayTimeouts <a name="ComputeExternalVpnGatewayTimeouts" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

&computeexternalvpngateway.ComputeExternalVpnGatewayTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#create ComputeExternalVpnGateway#create}. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#delete ComputeExternalVpnGateway#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#create ComputeExternalVpnGateway#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_external_vpn_gateway#delete ComputeExternalVpnGateway#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeExternalVpnGatewayInterfaceList <a name="ComputeExternalVpnGatewayInterfaceList" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeExternalVpnGatewayInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get"></a>

```go
func Get(index *f64) ComputeExternalVpnGatewayInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeExternalVpnGatewayInterfaceOutputReference <a name="ComputeExternalVpnGatewayInterfaceOutputReference" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeExternalVpnGatewayInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeExternalVpnGatewayTimeoutsOutputReference <a name="ComputeExternalVpnGatewayTimeoutsOutputReference" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeexternalvpngateway"

computeexternalvpngateway.NewComputeExternalVpnGatewayTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeExternalVpnGatewayTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeExternalVpnGateway.ComputeExternalVpnGatewayTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



