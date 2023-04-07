# `dataprocAutoscalingPolicyIamBinding` Submodule <a name="`dataprocAutoscalingPolicyIamBinding` Submodule" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocAutoscalingPolicyIamBinding <a name="DataprocAutoscalingPolicyIamBinding" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding google_dataproc_autoscaling_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

dataprocautoscalingpolicyiambinding.NewDataprocAutoscalingPolicyIamBinding(scope Construct, id *string, config DataprocAutoscalingPolicyIamBindingConfig) DataprocAutoscalingPolicyIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig">DataprocAutoscalingPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig">DataprocAutoscalingPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.putCondition"></a>

```go
func PutCondition(value DataprocAutoscalingPolicyIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

dataprocautoscalingpolicyiambinding.DataprocAutoscalingPolicyIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

dataprocautoscalingpolicyiambinding.DataprocAutoscalingPolicyIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

dataprocautoscalingpolicyiambinding.DataprocAutoscalingPolicyIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference">DataprocAutoscalingPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyIdInput">PolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.condition"></a>

```go
func Condition() DataprocAutoscalingPolicyIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference">DataprocAutoscalingPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.conditionInput"></a>

```go
func ConditionInput() DataprocAutoscalingPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyIdInput"></a>

```go
func PolicyIdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocAutoscalingPolicyIamBindingCondition <a name="DataprocAutoscalingPolicyIamBindingCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

&dataprocautoscalingpolicyiambinding.DataprocAutoscalingPolicyIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#expression DataprocAutoscalingPolicyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#title DataprocAutoscalingPolicyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#description DataprocAutoscalingPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#expression DataprocAutoscalingPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#title DataprocAutoscalingPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#description DataprocAutoscalingPolicyIamBinding#description}.

---

### DataprocAutoscalingPolicyIamBindingConfig <a name="DataprocAutoscalingPolicyIamBindingConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

&dataprocautoscalingpolicyiambinding.DataprocAutoscalingPolicyIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Members: *[]*string,
	PolicyId: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#members DataprocAutoscalingPolicyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.policyId">PolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#policy_id DataprocAutoscalingPolicyIamBinding#policy_id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#role DataprocAutoscalingPolicyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#id DataprocAutoscalingPolicyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#location DataprocAutoscalingPolicyIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#project DataprocAutoscalingPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#members DataprocAutoscalingPolicyIamBinding#members}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.policyId"></a>

```go
PolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#policy_id DataprocAutoscalingPolicyIamBinding#policy_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#role DataprocAutoscalingPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.condition"></a>

```go
Condition DataprocAutoscalingPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#condition DataprocAutoscalingPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#id DataprocAutoscalingPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#location DataprocAutoscalingPolicyIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy_iam_binding#project DataprocAutoscalingPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocAutoscalingPolicyIamBindingConditionOutputReference <a name="DataprocAutoscalingPolicyIamBindingConditionOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/dataprocautoscalingpolicyiambinding"

dataprocautoscalingpolicyiambinding.NewDataprocAutoscalingPolicyIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataprocAutoscalingPolicyIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataprocAutoscalingPolicyIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

---



