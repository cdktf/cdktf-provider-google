# `computeAutoscaler` Submodule <a name="`computeAutoscaler` Submodule" id="@cdktf/provider-google.computeAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeAutoscaler <a name="ComputeAutoscaler" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler google_compute_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscaler(scope Construct, id *string, config ComputeAutoscalerConfig) ComputeAutoscaler
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig">ComputeAutoscalerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig">ComputeAutoscalerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy">PutAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoscalingPolicy` <a name="PutAutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy"></a>

```go
func PutAutoscalingPolicy(value ComputeAutoscalerAutoscalingPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putAutoscalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts"></a>

```go
func PutTimeouts(value ComputeAutoscalerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.ComputeAutoscaler_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.ComputeAutoscaler_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.ComputeAutoscaler_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference">ComputeAutoscalerAutoscalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference">ComputeAutoscalerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicyInput">AutoscalingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicy"></a>

```go
func AutoscalingPolicy() ComputeAutoscalerAutoscalingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference">ComputeAutoscalerAutoscalingPolicyOutputReference</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeouts"></a>

```go
func Timeouts() ComputeAutoscalerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference">ComputeAutoscalerTimeoutsOutputReference</a>

---

##### `AutoscalingPolicyInput`<sup>Optional</sup> <a name="AutoscalingPolicyInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.autoscalingPolicyInput"></a>

```go
func AutoscalingPolicyInput() ComputeAutoscalerAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscaler.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeAutoscalerAutoscalingPolicy <a name="ComputeAutoscalerAutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicy {
	MaxReplicas: *f64,
	MinReplicas: *f64,
	CooldownPeriod: *f64,
	CpuUtilization: github.com/cdktf/cdktf-provider-google-go/google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization,
	LoadBalancingUtilization: github.com/cdktf/cdktf-provider-google-go/google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization,
	Metric: interface{},
	Mode: *string,
	ScaleInControl: github.com/cdktf/cdktf-provider-google-go/google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl,
	ScalingSchedules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | The maximum number of instances that the autoscaler can scale up to. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | The minimum number of replicas that the autoscaler can scale down to. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*f64</code> | The number of seconds that the autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | load_balancing_utilization block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.metric">Metric</a></code> | <code>interface{}</code> | metric block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.mode">Mode</a></code> | <code>*string</code> | Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"]. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | scale_in_control block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scalingSchedules">ScalingSchedules</a></code> | <code>interface{}</code> | scaling_schedules block. |

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.maxReplicas"></a>

```go
MaxReplicas *f64
```

- *Type:* *f64

The maximum number of instances that the autoscaler can scale up to.

This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#max_replicas ComputeAutoscaler#max_replicas}

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.minReplicas"></a>

```go
MinReplicas *f64
```

- *Type:* *f64

The minimum number of replicas that the autoscaler can scale down to.

This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#min_replicas ComputeAutoscaler#min_replicas}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cooldownPeriod"></a>

```go
CooldownPeriod *f64
```

- *Type:* *f64

The number of seconds that the autoscaler should wait before it starts collecting information from a new instance.

This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#cooldown_period ComputeAutoscaler#cooldown_period}

---

##### `CpuUtilization`<sup>Optional</sup> <a name="CpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.cpuUtilization"></a>

```go
CpuUtilization ComputeAutoscalerAutoscalingPolicyCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#cpu_utilization ComputeAutoscaler#cpu_utilization}

---

##### `LoadBalancingUtilization`<sup>Optional</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.loadBalancingUtilization"></a>

```go
LoadBalancingUtilization ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

load_balancing_utilization block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#load_balancing_utilization ComputeAutoscaler#load_balancing_utilization}

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.metric"></a>

```go
Metric interface{}
```

- *Type:* interface{}

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#metric ComputeAutoscaler#metric}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#mode ComputeAutoscaler#mode}

---

##### `ScaleInControl`<sup>Optional</sup> <a name="ScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scaleInControl"></a>

```go
ScaleInControl ComputeAutoscalerAutoscalingPolicyScaleInControl
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

scale_in_control block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#scale_in_control ComputeAutoscaler#scale_in_control}

---

##### `ScalingSchedules`<sup>Optional</sup> <a name="ScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy.property.scalingSchedules"></a>

```go
ScalingSchedules interface{}
```

- *Type:* interface{}

scaling_schedules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#scaling_schedules ComputeAutoscaler#scaling_schedules}

---

### ComputeAutoscalerAutoscalingPolicyCpuUtilization <a name="ComputeAutoscalerAutoscalingPolicyCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization {
	Target: *f64,
	PredictiveMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target">Target</a></code> | <code>*f64</code> | The target CPU utilization that the autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod">PredictiveMethod</a></code> | <code>*string</code> | Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

The target CPU utilization that the autoscaler should maintain.

Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `PredictiveMethod`<sup>Optional</sup> <a name="PredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization.property.predictiveMethod"></a>

```go
PredictiveMethod *string
```

- *Type:* *string

Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:.

* NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.
* OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#predictive_method ComputeAutoscaler#predictive_method}

---

### ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization <a name="ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization {
	Target: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target">Target</a></code> | <code>*f64</code> | Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain. |

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

Fraction of backend capacity utilization (set in HTTP(s) load balancing configuration) that autoscaler should maintain.

Must
be a positive float value. If not defined, the default is 0.8.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}

---

### ComputeAutoscalerAutoscalingPolicyMetric <a name="ComputeAutoscalerAutoscalingPolicyMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicyMetric {
	Name: *string,
	Target: *f64,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.name">Name</a></code> | <code>*string</code> | The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.target">Target</a></code> | <code>*f64</code> | The target value of the metric that autoscaler should maintain. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.type">Type</a></code> | <code>*string</code> | Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.name"></a>

```go
Name *string
```

- *Type:* *string

The identifier (type) of the Stackdriver Monitoring metric. The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.target"></a>

```go
Target *f64
```

- *Type:* *f64

The target value of the metric that autoscaler should maintain.

This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetric.property.type"></a>

```go
Type *string
```

- *Type:* *string

Defines how target utilization value is expressed for a Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#type ComputeAutoscaler#type}

---

### ComputeAutoscalerAutoscalingPolicyScaleInControl <a name="ComputeAutoscalerAutoscalingPolicyScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl {
	MaxScaledInReplicas: github.com/cdktf/cdktf-provider-google-go/google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas,
	TimeWindowSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | max_scaled_in_replicas block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec">TimeWindowSec</a></code> | <code>*f64</code> | How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above. |

---

##### `MaxScaledInReplicas`<sup>Optional</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.maxScaledInReplicas"></a>

```go
MaxScaledInReplicas ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

max_scaled_in_replicas block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#max_scaled_in_replicas ComputeAutoscaler#max_scaled_in_replicas}

---

##### `TimeWindowSec`<sup>Optional</sup> <a name="TimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl.property.timeWindowSec"></a>

```go
TimeWindowSec *f64
```

- *Type:* *f64

How long back autoscaling should look when computing recommendations to include directives regarding slower scale down, as described above.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#time_window_sec ComputeAutoscaler#time_window_sec}

---

### ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
	Fixed: *f64,
	Percent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed">Fixed</a></code> | <code>*f64</code> | Specifies a fixed number of VM instances. This must be a positive integer. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent">Percent</a></code> | <code>*f64</code> | Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.fixed"></a>

```go
Fixed *f64
```

- *Type:* *f64

Specifies a fixed number of VM instances. This must be a positive integer.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#fixed ComputeAutoscaler#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

Specifies a percentage of instances between 0 to 100%, inclusive. For example, specify 80 for 80%.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#percent ComputeAutoscaler#percent}

---

### ComputeAutoscalerAutoscalingPolicyScalingSchedules <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules {
	DurationSec: *f64,
	MinRequiredReplicas: *f64,
	Name: *string,
	Schedule: *string,
	Description: *string,
	Disabled: interface{},
	TimeZone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec">DurationSec</a></code> | <code>*f64</code> | The duration of time intervals (in seconds) for which this scaling schedule will be running. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>*f64</code> | Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule">Schedule</a></code> | <code>*string</code> | The start timestamps of time intervals when this scaling schedule should provide a scaling signal. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description">Description</a></code> | <code>*string</code> | A description of a scaling schedule. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled">Disabled</a></code> | <code>interface{}</code> | A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone">TimeZone</a></code> | <code>*string</code> | The time zone to be used when interpreting the schedule. |

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.durationSec"></a>

```go
DurationSec *f64
```

- *Type:* *f64

The duration of time intervals (in seconds) for which this scaling schedule will be running.

The minimum allowed value is 300.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#duration_sec ComputeAutoscaler#duration_sec}

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.minRequiredReplicas"></a>

```go
MinRequiredReplicas *f64
```

- *Type:* *f64

Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#min_required_replicas ComputeAutoscaler#min_required_replicas}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}.

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

The start timestamps of time intervals when this scaling schedule should provide a scaling signal.

This field uses the extended cron format (with an optional year field).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#schedule ComputeAutoscaler#schedule}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of a scaling schedule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

A boolean value that specifies if a scaling schedule can influence autoscaler recommendations.

If set to true, then a scaling schedule has no effect.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#disabled ComputeAutoscaler#disabled}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedules.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

The time zone to be used when interpreting the schedule.

The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#time_zone ComputeAutoscaler#time_zone}

---

### ComputeAutoscalerConfig <a name="ComputeAutoscalerConfig" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoscalingPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy,
	Name: *string,
	Target: *string,
	Description: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeAutoscaler.ComputeAutoscalerTimeouts,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.autoscalingPolicy">AutoscalingPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | autoscaling_policy block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.target">Target</a></code> | <code>*string</code> | URL of the managed instance group that this autoscaler will scale. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#id ComputeAutoscaler#id}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#project ComputeAutoscaler#project}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.zone">Zone</a></code> | <code>*string</code> | URL of the zone where the instance group resides. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoscalingPolicy`<sup>Required</sup> <a name="AutoscalingPolicy" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.autoscalingPolicy"></a>

```go
AutoscalingPolicy ComputeAutoscalerAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

autoscaling_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#autoscaling_policy ComputeAutoscaler#autoscaling_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

The name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.target"></a>

```go
Target *string
```

- *Type:* *string

URL of the managed instance group that this autoscaler will scale.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#description ComputeAutoscaler#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#id ComputeAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#project ComputeAutoscaler#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.timeouts"></a>

```go
Timeouts ComputeAutoscalerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts">ComputeAutoscalerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#timeouts ComputeAutoscaler#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

URL of the zone where the instance group resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#zone ComputeAutoscaler#zone}

---

### ComputeAutoscalerTimeouts <a name="ComputeAutoscalerTimeouts" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

&computeautoscaler.ComputeAutoscalerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#create ComputeAutoscaler#create}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#delete ComputeAutoscaler#delete}. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#update ComputeAutoscaler#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#create ComputeAutoscaler#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#delete ComputeAutoscaler#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#update ComputeAutoscaler#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference <a name="ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod">ResetPredictiveMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredictiveMethod` <a name="ResetPredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.resetPredictiveMethod"></a>

```go
func ResetPredictiveMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput">PredictiveMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod">PredictiveMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PredictiveMethodInput`<sup>Optional</sup> <a name="PredictiveMethodInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethodInput"></a>

```go
func PredictiveMethodInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `PredictiveMethod`<sup>Required</sup> <a name="PredictiveMethod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.predictiveMethod"></a>

```go
func PredictiveMethod() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeAutoscalerAutoscalingPolicyCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---


### ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference <a name="ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---


### ComputeAutoscalerAutoscalingPolicyMetricList <a name="ComputeAutoscalerAutoscalingPolicyMetricList" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeAutoscalerAutoscalingPolicyMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get"></a>

```go
func Get(index *f64) ComputeAutoscalerAutoscalingPolicyMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeAutoscalerAutoscalingPolicyMetricOutputReference <a name="ComputeAutoscalerAutoscalingPolicyMetricOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeAutoscalerAutoscalingPolicyMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput">TargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target">Target</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.targetInput"></a>

```go
func TargetInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.target"></a>

```go
func Target() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeAutoscalerAutoscalingPolicyOutputReference <a name="ComputeAutoscalerAutoscalingPolicyOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAutoscalerAutoscalingPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization">PutCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization">PutLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl">PutScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules">PutScalingSchedules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization">ResetCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization">ResetLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl">ResetScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules">ResetScalingSchedules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCpuUtilization` <a name="PutCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization"></a>

```go
func PutCpuUtilization(value ComputeAutoscalerAutoscalingPolicyCpuUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `PutLoadBalancingUtilization` <a name="PutLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization"></a>

```go
func PutLoadBalancingUtilization(value ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putLoadBalancingUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric"></a>

```go
func PutMetric(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putMetric.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScaleInControl` <a name="PutScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl"></a>

```go
func PutScaleInControl(value ComputeAutoscalerAutoscalingPolicyScaleInControl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScaleInControl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `PutScalingSchedules` <a name="PutScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules"></a>

```go
func PutScalingSchedules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.putScalingSchedules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCooldownPeriod"></a>

```go
func ResetCooldownPeriod()
```

##### `ResetCpuUtilization` <a name="ResetCpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetCpuUtilization"></a>

```go
func ResetCpuUtilization()
```

##### `ResetLoadBalancingUtilization` <a name="ResetLoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetLoadBalancingUtilization"></a>

```go
func ResetLoadBalancingUtilization()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetScaleInControl` <a name="ResetScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScaleInControl"></a>

```go
func ResetScaleInControl()
```

##### `ResetScalingSchedules` <a name="ResetScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.resetScalingSchedules"></a>

```go
func ResetScalingSchedules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization">CpuUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization">LoadBalancingUtilization</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList">ComputeAutoscalerAutoscalingPolicyMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl">ScaleInControl</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules">ScalingSchedules</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput">CpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput">LoadBalancingUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput">MaxReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput">MinReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput">ScaleInControlInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput">ScalingSchedulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas">MaxReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas">MinReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilization`<sup>Required</sup> <a name="CpuUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilization"></a>

```go
func CpuUtilization() ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference</a>

---

##### `LoadBalancingUtilization`<sup>Required</sup> <a name="LoadBalancingUtilization" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilization"></a>

```go
func LoadBalancingUtilization() ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metric"></a>

```go
func Metric() ComputeAutoscalerAutoscalingPolicyMetricList
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyMetricList">ComputeAutoscalerAutoscalingPolicyMetricList</a>

---

##### `ScaleInControl`<sup>Required</sup> <a name="ScaleInControl" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControl"></a>

```go
func ScaleInControl() ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference</a>

---

##### `ScalingSchedules`<sup>Required</sup> <a name="ScalingSchedules" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedules"></a>

```go
func ScalingSchedules() ComputeAutoscalerAutoscalingPolicyScalingSchedulesList
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList">ComputeAutoscalerAutoscalingPolicyScalingSchedulesList</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriodInput"></a>

```go
func CooldownPeriodInput() *f64
```

- *Type:* *f64

---

##### `CpuUtilizationInput`<sup>Optional</sup> <a name="CpuUtilizationInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cpuUtilizationInput"></a>

```go
func CpuUtilizationInput() ComputeAutoscalerAutoscalingPolicyCpuUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyCpuUtilization">ComputeAutoscalerAutoscalingPolicyCpuUtilization</a>

---

##### `LoadBalancingUtilizationInput`<sup>Optional</sup> <a name="LoadBalancingUtilizationInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.loadBalancingUtilizationInput"></a>

```go
func LoadBalancingUtilizationInput() ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization">ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization</a>

---

##### `MaxReplicasInput`<sup>Optional</sup> <a name="MaxReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicasInput"></a>

```go
func MaxReplicasInput() *f64
```

- *Type:* *f64

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `MinReplicasInput`<sup>Optional</sup> <a name="MinReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicasInput"></a>

```go
func MinReplicasInput() *f64
```

- *Type:* *f64

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ScaleInControlInput`<sup>Optional</sup> <a name="ScaleInControlInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scaleInControlInput"></a>

```go
func ScaleInControlInput() ComputeAutoscalerAutoscalingPolicyScaleInControl
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---

##### `ScalingSchedulesInput`<sup>Optional</sup> <a name="ScalingSchedulesInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.scalingSchedulesInput"></a>

```go
func ScalingSchedulesInput() interface{}
```

- *Type:* interface{}

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.cooldownPeriod"></a>

```go
func CooldownPeriod() *f64
```

- *Type:* *f64

---

##### `MaxReplicas`<sup>Required</sup> <a name="MaxReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.maxReplicas"></a>

```go
func MaxReplicas() *f64
```

- *Type:* *f64

---

##### `MinReplicas`<sup>Required</sup> <a name="MinReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.minReplicas"></a>

```go
func MinReplicas() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeAutoscalerAutoscalingPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicy">ComputeAutoscalerAutoscalingPolicy</a>

---


### ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetFixed"></a>

```go
func ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.resetPercent"></a>

```go
func ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput">FixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed">Fixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixedInput"></a>

```go
func FixedInput() *f64
```

- *Type:* *f64

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.fixed"></a>

```go
func Fixed() *f64
```

- *Type:* *f64

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---


### ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas">PutMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas">ResetMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec">ResetTimeWindowSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxScaledInReplicas` <a name="PutMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas"></a>

```go
func PutMaxScaledInReplicas(value ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.putMaxScaledInReplicas.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `ResetMaxScaledInReplicas` <a name="ResetMaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetMaxScaledInReplicas"></a>

```go
func ResetMaxScaledInReplicas()
```

##### `ResetTimeWindowSec` <a name="ResetTimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.resetTimeWindowSec"></a>

```go
func ResetTimeWindowSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas">MaxScaledInReplicas</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput">MaxScaledInReplicasInput</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput">TimeWindowSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec">TimeWindowSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxScaledInReplicas`<sup>Required</sup> <a name="MaxScaledInReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicas"></a>

```go
func MaxScaledInReplicas() ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference</a>

---

##### `MaxScaledInReplicasInput`<sup>Optional</sup> <a name="MaxScaledInReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.maxScaledInReplicasInput"></a>

```go
func MaxScaledInReplicasInput() ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas">ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas</a>

---

##### `TimeWindowSecInput`<sup>Optional</sup> <a name="TimeWindowSecInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSecInput"></a>

```go
func TimeWindowSecInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowSec`<sup>Required</sup> <a name="TimeWindowSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.timeWindowSec"></a>

```go
func TimeWindowSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeAutoscalerAutoscalingPolicyScaleInControl
```

- *Type:* <a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScaleInControl">ComputeAutoscalerAutoscalingPolicyScaleInControl</a>

---


### ComputeAutoscalerAutoscalingPolicyScalingSchedulesList <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedulesList" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyScalingSchedulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeAutoscalerAutoscalingPolicyScalingSchedulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get"></a>

```go
func Get(index *f64) ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference <a name="ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.resetTimeZone"></a>

```go
func ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput">DurationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput">MinRequiredReplicasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec">DurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas">MinRequiredReplicas</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DurationSecInput`<sup>Optional</sup> <a name="DurationSecInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSecInput"></a>

```go
func DurationSecInput() *f64
```

- *Type:* *f64

---

##### `MinRequiredReplicasInput`<sup>Optional</sup> <a name="MinRequiredReplicasInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicasInput"></a>

```go
func MinRequiredReplicasInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `DurationSec`<sup>Required</sup> <a name="DurationSec" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.durationSec"></a>

```go
func DurationSec() *f64
```

- *Type:* *f64

---

##### `MinRequiredReplicas`<sup>Required</sup> <a name="MinRequiredReplicas" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.minRequiredReplicas"></a>

```go
func MinRequiredReplicas() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerAutoscalingPolicyScalingSchedulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeAutoscalerTimeoutsOutputReference <a name="ComputeAutoscalerTimeoutsOutputReference" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeautoscaler"

computeautoscaler.NewComputeAutoscalerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeAutoscalerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeAutoscaler.ComputeAutoscalerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



