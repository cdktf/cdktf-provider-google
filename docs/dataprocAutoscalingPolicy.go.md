# `dataprocAutoscalingPolicy` Submodule <a name="`dataprocAutoscalingPolicy` Submodule" id="@cdktf/provider-google.dataprocAutoscalingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocAutoscalingPolicy <a name="DataprocAutoscalingPolicy" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy google_dataproc_autoscaling_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.NewDataprocAutoscalingPolicy(scope Construct, id *string, config DataprocAutoscalingPolicyConfig) DataprocAutoscalingPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig">DataprocAutoscalingPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig">DataprocAutoscalingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm">PutBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig">PutSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig">PutWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetBasicAlgorithm">ResetBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetSecondaryWorkerConfig">ResetSecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetWorkerConfig">ResetWorkerConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBasicAlgorithm` <a name="PutBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm"></a>

```go
func PutBasicAlgorithm(value DataprocAutoscalingPolicyBasicAlgorithm)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putBasicAlgorithm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `PutSecondaryWorkerConfig` <a name="PutSecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig"></a>

```go
func PutSecondaryWorkerConfig(value DataprocAutoscalingPolicySecondaryWorkerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putSecondaryWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts"></a>

```go
func PutTimeouts(value DataprocAutoscalingPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

---

##### `PutWorkerConfig` <a name="PutWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig"></a>

```go
func PutWorkerConfig(value DataprocAutoscalingPolicyWorkerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.putWorkerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---

##### `ResetBasicAlgorithm` <a name="ResetBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetBasicAlgorithm"></a>

```go
func ResetBasicAlgorithm()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSecondaryWorkerConfig` <a name="ResetSecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetSecondaryWorkerConfig"></a>

```go
func ResetSecondaryWorkerConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkerConfig` <a name="ResetWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.resetWorkerConfig"></a>

```go
func ResetWorkerConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.DataprocAutoscalingPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.DataprocAutoscalingPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.DataprocAutoscalingPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithm">BasicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference">DataprocAutoscalingPolicyBasicAlgorithmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfig">SecondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference">DataprocAutoscalingPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference">DataprocAutoscalingPolicyWorkerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithmInput">BasicAlgorithmInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfigInput">SecondaryWorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfigInput">WorkerConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BasicAlgorithm`<sup>Required</sup> <a name="BasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithm"></a>

```go
func BasicAlgorithm() DataprocAutoscalingPolicyBasicAlgorithmOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference">DataprocAutoscalingPolicyBasicAlgorithmOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecondaryWorkerConfig`<sup>Required</sup> <a name="SecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfig"></a>

```go
func SecondaryWorkerConfig() DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference">DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeouts"></a>

```go
func Timeouts() DataprocAutoscalingPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference">DataprocAutoscalingPolicyTimeoutsOutputReference</a>

---

##### `WorkerConfig`<sup>Required</sup> <a name="WorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfig"></a>

```go
func WorkerConfig() DataprocAutoscalingPolicyWorkerConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference">DataprocAutoscalingPolicyWorkerConfigOutputReference</a>

---

##### `BasicAlgorithmInput`<sup>Optional</sup> <a name="BasicAlgorithmInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.basicAlgorithmInput"></a>

```go
func BasicAlgorithmInput() DataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecondaryWorkerConfigInput`<sup>Optional</sup> <a name="SecondaryWorkerConfigInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.secondaryWorkerConfigInput"></a>

```go
func SecondaryWorkerConfigInput() DataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerConfigInput`<sup>Optional</sup> <a name="WorkerConfigInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.workerConfigInput"></a>

```go
func WorkerConfigInput() DataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocAutoscalingPolicyBasicAlgorithm <a name="DataprocAutoscalingPolicyBasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

&dataprocautoscalingpolicy.DataprocAutoscalingPolicyBasicAlgorithm {
	YarnConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig,
	CooldownPeriod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig">YarnConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | yarn_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | Duration between scaling events. A scaling period starts after the update operation from the previous event has completed. |

---

##### `YarnConfig`<sup>Required</sup> <a name="YarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.yarnConfig"></a>

```go
YarnConfig DataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

yarn_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#yarn_config DataprocAutoscalingPolicy#yarn_config}

---

##### `CooldownPeriod`<sup>Optional</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm.property.cooldownPeriod"></a>

```go
CooldownPeriod *string
```

- *Type:* *string

Duration between scaling events. A scaling period starts after the update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#cooldown_period DataprocAutoscalingPolicy#cooldown_period}

---

### DataprocAutoscalingPolicyBasicAlgorithmYarnConfig <a name="DataprocAutoscalingPolicyBasicAlgorithmYarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

&dataprocautoscalingpolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig {
	GracefulDecommissionTimeout: *string,
	ScaleDownFactor: *f64,
	ScaleUpFactor: *f64,
	ScaleDownMinWorkerFraction: *f64,
	ScaleUpMinWorkerFraction: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>*string</code> | Timeout for YARN graceful decommissioning of Node Managers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor">ScaleDownFactor</a></code> | <code>*f64</code> | Fraction of average pending memory in the last cooldown period for which to remove workers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor">ScaleUpFactor</a></code> | <code>*f64</code> | Fraction of average pending memory in the last cooldown period for which to add workers. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction">ScaleDownMinWorkerFraction</a></code> | <code>*f64</code> | Minimum scale-down threshold as a fraction of total cluster size before scaling occurs. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction">ScaleUpMinWorkerFraction</a></code> | <code>*f64</code> | Minimum scale-up threshold as a fraction of total cluster size before scaling occurs. |

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.gracefulDecommissionTimeout"></a>

```go
GracefulDecommissionTimeout *string
```

- *Type:* *string

Timeout for YARN graceful decommissioning of Node Managers.

Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#graceful_decommission_timeout DataprocAutoscalingPolicy#graceful_decommission_timeout}

---

##### `ScaleDownFactor`<sup>Required</sup> <a name="ScaleDownFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownFactor"></a>

```go
ScaleDownFactor *f64
```

- *Type:* *f64

Fraction of average pending memory in the last cooldown period for which to remove workers.

A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_factor DataprocAutoscalingPolicy#scale_down_factor}

---

##### `ScaleUpFactor`<sup>Required</sup> <a name="ScaleUpFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpFactor"></a>

```go
ScaleUpFactor *f64
```

- *Type:* *f64

Fraction of average pending memory in the last cooldown period for which to add workers.

A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_factor DataprocAutoscalingPolicy#scale_up_factor}

---

##### `ScaleDownMinWorkerFraction`<sup>Optional</sup> <a name="ScaleDownMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleDownMinWorkerFraction"></a>

```go
ScaleDownMinWorkerFraction *f64
```

- *Type:* *f64

Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_min_worker_fraction DataprocAutoscalingPolicy#scale_down_min_worker_fraction}

---

##### `ScaleUpMinWorkerFraction`<sup>Optional</sup> <a name="ScaleUpMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig.property.scaleUpMinWorkerFraction"></a>

```go
ScaleUpMinWorkerFraction *f64
```

- *Type:* *f64

Minimum scale-up threshold as a fraction of total cluster size before scaling occurs.

For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_min_worker_fraction DataprocAutoscalingPolicy#scale_up_min_worker_fraction}

---

### DataprocAutoscalingPolicyConfig <a name="DataprocAutoscalingPolicyConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

&dataprocautoscalingpolicy.DataprocAutoscalingPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyId: *string,
	BasicAlgorithm: github.com/cdktf/cdktf-provider-google-go/google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm,
	Id: *string,
	Location: *string,
	Project: *string,
	SecondaryWorkerConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts,
	WorkerConfig: github.com/cdktf/cdktf-provider-google-go/google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | The policy id. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.basicAlgorithm">BasicAlgorithm</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | basic_algorithm block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.location">Location</a></code> | <code>*string</code> | The  location where the autoscaling policy should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig">SecondaryWorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | secondary_worker_config block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.workerConfig">WorkerConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | worker_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

The policy id.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#policy_id DataprocAutoscalingPolicy#policy_id}

---

##### `BasicAlgorithm`<sup>Optional</sup> <a name="BasicAlgorithm" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.basicAlgorithm"></a>

```go
BasicAlgorithm DataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

basic_algorithm block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The  location where the autoscaling policy should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#location DataprocAutoscalingPolicy#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}.

---

##### `SecondaryWorkerConfig`<sup>Optional</sup> <a name="SecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.secondaryWorkerConfig"></a>

```go
SecondaryWorkerConfig DataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

secondary_worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.timeouts"></a>

```go
Timeouts DataprocAutoscalingPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts">DataprocAutoscalingPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#timeouts DataprocAutoscalingPolicy#timeouts}

---

##### `WorkerConfig`<sup>Optional</sup> <a name="WorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyConfig.property.workerConfig"></a>

```go
WorkerConfig DataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

worker_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#worker_config DataprocAutoscalingPolicy#worker_config}

---

### DataprocAutoscalingPolicySecondaryWorkerConfig <a name="DataprocAutoscalingPolicySecondaryWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

&dataprocautoscalingpolicy.DataprocAutoscalingPolicySecondaryWorkerConfig {
	MaxInstances: *f64,
	MinInstances: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.weight">Weight</a></code> | <code>*f64</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `MaxInstances`<sup>Optional</sup> <a name="MaxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum number of instances for this group.

Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

### DataprocAutoscalingPolicyTimeouts <a name="DataprocAutoscalingPolicyTimeouts" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

&dataprocautoscalingpolicy.DataprocAutoscalingPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}.

---

### DataprocAutoscalingPolicyWorkerConfig <a name="DataprocAutoscalingPolicyWorkerConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

&dataprocautoscalingpolicy.DataprocAutoscalingPolicyWorkerConfig {
	MaxInstances: *f64,
	MinInstances: *f64,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | Maximum number of instances for this group. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.minInstances">MinInstances</a></code> | <code>*f64</code> | Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.weight">Weight</a></code> | <code>*f64</code> | Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group. |

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.maxInstances"></a>

```go
MaxInstances *f64
```

- *Type:* *f64

Maximum number of instances for this group.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}

---

##### `MinInstances`<sup>Optional</sup> <a name="MinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.minInstances"></a>

```go
MinInstances *f64
```

- *Type:* *f64

Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Weight for the instance group, which is used to determine the fraction of total workers in the cluster from this instance group.

For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocAutoscalingPolicyBasicAlgorithmOutputReference <a name="DataprocAutoscalingPolicyBasicAlgorithmOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.NewDataprocAutoscalingPolicyBasicAlgorithmOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocAutoscalingPolicyBasicAlgorithmOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig">PutYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod">ResetCooldownPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutYarnConfig` <a name="PutYarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig"></a>

```go
func PutYarnConfig(value DataprocAutoscalingPolicyBasicAlgorithmYarnConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.putYarnConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `ResetCooldownPeriod` <a name="ResetCooldownPeriod" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.resetCooldownPeriod"></a>

```go
func ResetCooldownPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig">YarnConfig</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput">CooldownPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput">YarnConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod">CooldownPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `YarnConfig`<sup>Required</sup> <a name="YarnConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfig"></a>

```go
func YarnConfig() DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference">DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference</a>

---

##### `CooldownPeriodInput`<sup>Optional</sup> <a name="CooldownPeriodInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriodInput"></a>

```go
func CooldownPeriodInput() *string
```

- *Type:* *string

---

##### `YarnConfigInput`<sup>Optional</sup> <a name="YarnConfigInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.yarnConfigInput"></a>

```go
func YarnConfigInput() DataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---

##### `CooldownPeriod`<sup>Required</sup> <a name="CooldownPeriod" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.cooldownPeriod"></a>

```go
func CooldownPeriod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocAutoscalingPolicyBasicAlgorithm
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithm">DataprocAutoscalingPolicyBasicAlgorithm</a>

---


### DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference <a name="DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.NewDataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction">ResetScaleDownMinWorkerFraction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction">ResetScaleUpMinWorkerFraction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleDownMinWorkerFraction` <a name="ResetScaleDownMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleDownMinWorkerFraction"></a>

```go
func ResetScaleDownMinWorkerFraction()
```

##### `ResetScaleUpMinWorkerFraction` <a name="ResetScaleUpMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.resetScaleUpMinWorkerFraction"></a>

```go
func ResetScaleUpMinWorkerFraction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput">GracefulDecommissionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput">ScaleDownFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput">ScaleDownMinWorkerFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput">ScaleUpFactorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput">ScaleUpMinWorkerFractionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout">GracefulDecommissionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor">ScaleDownFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction">ScaleDownMinWorkerFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor">ScaleUpFactor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction">ScaleUpMinWorkerFraction</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GracefulDecommissionTimeoutInput`<sup>Optional</sup> <a name="GracefulDecommissionTimeoutInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeoutInput"></a>

```go
func GracefulDecommissionTimeoutInput() *string
```

- *Type:* *string

---

##### `ScaleDownFactorInput`<sup>Optional</sup> <a name="ScaleDownFactorInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactorInput"></a>

```go
func ScaleDownFactorInput() *f64
```

- *Type:* *f64

---

##### `ScaleDownMinWorkerFractionInput`<sup>Optional</sup> <a name="ScaleDownMinWorkerFractionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFractionInput"></a>

```go
func ScaleDownMinWorkerFractionInput() *f64
```

- *Type:* *f64

---

##### `ScaleUpFactorInput`<sup>Optional</sup> <a name="ScaleUpFactorInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactorInput"></a>

```go
func ScaleUpFactorInput() *f64
```

- *Type:* *f64

---

##### `ScaleUpMinWorkerFractionInput`<sup>Optional</sup> <a name="ScaleUpMinWorkerFractionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFractionInput"></a>

```go
func ScaleUpMinWorkerFractionInput() *f64
```

- *Type:* *f64

---

##### `GracefulDecommissionTimeout`<sup>Required</sup> <a name="GracefulDecommissionTimeout" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.gracefulDecommissionTimeout"></a>

```go
func GracefulDecommissionTimeout() *string
```

- *Type:* *string

---

##### `ScaleDownFactor`<sup>Required</sup> <a name="ScaleDownFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownFactor"></a>

```go
func ScaleDownFactor() *f64
```

- *Type:* *f64

---

##### `ScaleDownMinWorkerFraction`<sup>Required</sup> <a name="ScaleDownMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleDownMinWorkerFraction"></a>

```go
func ScaleDownMinWorkerFraction() *f64
```

- *Type:* *f64

---

##### `ScaleUpFactor`<sup>Required</sup> <a name="ScaleUpFactor" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpFactor"></a>

```go
func ScaleUpFactor() *f64
```

- *Type:* *f64

---

##### `ScaleUpMinWorkerFraction`<sup>Required</sup> <a name="ScaleUpMinWorkerFraction" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.scaleUpMinWorkerFraction"></a>

```go
func ScaleUpMinWorkerFraction() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocAutoscalingPolicyBasicAlgorithmYarnConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyBasicAlgorithmYarnConfig">DataprocAutoscalingPolicyBasicAlgorithmYarnConfig</a>

---


### DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference <a name="DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.NewDataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances">ResetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInstances` <a name="ResetMaxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMaxInstances"></a>

```go
func ResetMaxInstances()
```

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocAutoscalingPolicySecondaryWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicySecondaryWorkerConfig">DataprocAutoscalingPolicySecondaryWorkerConfig</a>

---


### DataprocAutoscalingPolicyTimeoutsOutputReference <a name="DataprocAutoscalingPolicyTimeoutsOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.NewDataprocAutoscalingPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocAutoscalingPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataprocAutoscalingPolicyWorkerConfigOutputReference <a name="DataprocAutoscalingPolicyWorkerConfigOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicy"

dataprocautoscalingpolicy.NewDataprocAutoscalingPolicyWorkerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocAutoscalingPolicyWorkerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances">ResetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinInstances` <a name="ResetMinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetMinInstances"></a>

```go
func ResetMinInstances()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput">MaxInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput">MinInstancesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances">MaxInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances">MinInstances</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInstancesInput`<sup>Optional</sup> <a name="MaxInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstancesInput"></a>

```go
func MaxInstancesInput() *f64
```

- *Type:* *f64

---

##### `MinInstancesInput`<sup>Optional</sup> <a name="MinInstancesInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstancesInput"></a>

```go
func MinInstancesInput() *f64
```

- *Type:* *f64

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `MaxInstances`<sup>Required</sup> <a name="MaxInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.maxInstances"></a>

```go
func MaxInstances() *f64
```

- *Type:* *f64

---

##### `MinInstances`<sup>Required</sup> <a name="MinInstances" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.minInstances"></a>

```go
func MinInstances() *f64
```

- *Type:* *f64

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocAutoscalingPolicyWorkerConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicy.DataprocAutoscalingPolicyWorkerConfig">DataprocAutoscalingPolicyWorkerConfig</a>

---



