# `healthcareHl7V2StoreIamBinding` Submodule <a name="`healthcareHl7V2StoreIamBinding` Submodule" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2StoreIamBinding <a name="HealthcareHl7V2StoreIamBinding" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding google_healthcare_hl7_v2_store_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.NewHealthcareHl7V2StoreIamBinding(scope Construct, id *string, config HealthcareHl7V2StoreIamBindingConfig) HealthcareHl7V2StoreIamBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig">HealthcareHl7V2StoreIamBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig">HealthcareHl7V2StoreIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition"></a>

```go
func PutCondition(value HealthcareHl7V2StoreIamBindingCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference">HealthcareHl7V2StoreIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreIdInput">Hl7V2StoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.membersInput">MembersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreId">Hl7V2StoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.members">Members</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.condition"></a>

```go
func Condition() HealthcareHl7V2StoreIamBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference">HealthcareHl7V2StoreIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.conditionInput"></a>

```go
func ConditionInput() HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---

##### `Hl7V2StoreIdInput`<sup>Optional</sup> <a name="Hl7V2StoreIdInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreIdInput"></a>

```go
func Hl7V2StoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.membersInput"></a>

```go
func MembersInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Hl7V2StoreId`<sup>Required</sup> <a name="Hl7V2StoreId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.hl7V2StoreId"></a>

```go
func Hl7V2StoreId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.members"></a>

```go
func Members() *[]*string
```

- *Type:* *[]*string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreIamBindingCondition <a name="HealthcareHl7V2StoreIamBindingCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

&healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBindingCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#expression HealthcareHl7V2StoreIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#title HealthcareHl7V2StoreIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#description HealthcareHl7V2StoreIamBinding#description}.

---

### HealthcareHl7V2StoreIamBindingConfig <a name="HealthcareHl7V2StoreIamBindingConfig" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

&healthcarehl7v2storeiambinding.HealthcareHl7V2StoreIamBindingConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hl7V2StoreId: *string,
	Members: *[]*string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.hl7V2StoreId">Hl7V2StoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.members">Members</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hl7V2StoreId`<sup>Required</sup> <a name="Hl7V2StoreId" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.hl7V2StoreId"></a>

```go
Hl7V2StoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#hl7_v2_store_id HealthcareHl7V2StoreIamBinding#hl7_v2_store_id}.

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.members"></a>

```go
Members *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#members HealthcareHl7V2StoreIamBinding#members}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#role HealthcareHl7V2StoreIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.condition"></a>

```go
Condition HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#condition HealthcareHl7V2StoreIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store_iam_binding#id HealthcareHl7V2StoreIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreIamBindingConditionOutputReference <a name="HealthcareHl7V2StoreIamBindingConditionOutputReference" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2storeiambinding"

healthcarehl7v2storeiambinding.NewHealthcareHl7V2StoreIamBindingConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareHl7V2StoreIamBindingConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareHl7V2StoreIamBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamBinding.HealthcareHl7V2StoreIamBindingCondition">HealthcareHl7V2StoreIamBindingCondition</a>

---



