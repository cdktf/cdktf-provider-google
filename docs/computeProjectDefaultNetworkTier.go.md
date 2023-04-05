# `computeProjectDefaultNetworkTier` Submodule <a name="`computeProjectDefaultNetworkTier` Submodule" id="@cdktf/provider-google.computeProjectDefaultNetworkTier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeProjectDefaultNetworkTier <a name="ComputeProjectDefaultNetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier google_compute_project_default_network_tier}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

computeprojectdefaultnetworktier.NewComputeProjectDefaultNetworkTier(scope Construct, id *string, config ComputeProjectDefaultNetworkTierConfig) ComputeProjectDefaultNetworkTier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig">ComputeProjectDefaultNetworkTierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig">ComputeProjectDefaultNetworkTierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts"></a>

```go
func PutTimeouts(value ComputeProjectDefaultNetworkTierTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

computeprojectdefaultnetworktier.ComputeProjectDefaultNetworkTier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

computeprojectdefaultnetworktier.ComputeProjectDefaultNetworkTier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

computeprojectdefaultnetworktier.ComputeProjectDefaultNetworkTier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput">NetworkTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeouts"></a>

```go
func Timeouts() ComputeProjectDefaultNetworkTierTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference">ComputeProjectDefaultNetworkTierTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkTierInput`<sup>Optional</sup> <a name="NetworkTierInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTierInput"></a>

```go
func NetworkTierInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeProjectDefaultNetworkTierConfig <a name="ComputeProjectDefaultNetworkTierConfig" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

&computeprojectdefaultnetworktier.ComputeProjectDefaultNetworkTierConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	NetworkTier: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier">NetworkTier</a></code> | <code>*string</code> | The default network tier to be configured for the project. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.networkTier"></a>

```go
NetworkTier *string
```

- *Type:* *string

The default network tier to be configured for the project.

This field can take the following values: PREMIUM or STANDARD.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#network_tier ComputeProjectDefaultNetworkTier#network_tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#id ComputeProjectDefaultNetworkTier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#project ComputeProjectDefaultNetworkTier#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierConfig.property.timeouts"></a>

```go
Timeouts ComputeProjectDefaultNetworkTierTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts">ComputeProjectDefaultNetworkTierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#timeouts ComputeProjectDefaultNetworkTier#timeouts}

---

### ComputeProjectDefaultNetworkTierTimeouts <a name="ComputeProjectDefaultNetworkTierTimeouts" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

&computeprojectdefaultnetworktier.ComputeProjectDefaultNetworkTierTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_project_default_network_tier#create ComputeProjectDefaultNetworkTier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeProjectDefaultNetworkTierTimeoutsOutputReference <a name="ComputeProjectDefaultNetworkTierTimeoutsOutputReference" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeprojectdefaultnetworktier"

computeprojectdefaultnetworktier.NewComputeProjectDefaultNetworkTierTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeProjectDefaultNetworkTierTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeProjectDefaultNetworkTier.ComputeProjectDefaultNetworkTierTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



