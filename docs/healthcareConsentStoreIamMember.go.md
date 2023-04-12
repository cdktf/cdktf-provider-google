# `healthcareConsentStoreIamMember` Submodule <a name="`healthcareConsentStoreIamMember` Submodule" id="@cdktf/provider-google.healthcareConsentStoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareConsentStoreIamMember <a name="HealthcareConsentStoreIamMember" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member google_healthcare_consent_store_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

healthcareconsentstoreiammember.NewHealthcareConsentStoreIamMember(scope Construct, id *string, config HealthcareConsentStoreIamMemberConfig) HealthcareConsentStoreIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig">HealthcareConsentStoreIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig">HealthcareConsentStoreIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition"></a>

```go
func PutCondition(value HealthcareConsentStoreIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

healthcareconsentstoreiammember.HealthcareConsentStoreIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

healthcareconsentstoreiammember.HealthcareConsentStoreIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

healthcareconsentstoreiammember.HealthcareConsentStoreIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference">HealthcareConsentStoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreIdInput">ConsentStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.condition"></a>

```go
func Condition() HealthcareConsentStoreIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference">HealthcareConsentStoreIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.conditionInput"></a>

```go
func ConditionInput() HealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

---

##### `ConsentStoreIdInput`<sup>Optional</sup> <a name="ConsentStoreIdInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreIdInput"></a>

```go
func ConsentStoreIdInput() *string
```

- *Type:* *string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.consentStoreId"></a>

```go
func ConsentStoreId() *string
```

- *Type:* *string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareConsentStoreIamMemberCondition <a name="HealthcareConsentStoreIamMemberCondition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

&healthcareconsentstoreiammember.HealthcareConsentStoreIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#expression HealthcareConsentStoreIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#title HealthcareConsentStoreIamMember#title}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#description HealthcareConsentStoreIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#expression HealthcareConsentStoreIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#title HealthcareConsentStoreIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#description HealthcareConsentStoreIamMember#description}.

---

### HealthcareConsentStoreIamMemberConfig <a name="HealthcareConsentStoreIamMemberConfig" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

&healthcareconsentstoreiammember.HealthcareConsentStoreIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsentStoreId: *string,
	Dataset: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.consentStoreId">ConsentStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#consent_store_id HealthcareConsentStoreIamMember#consent_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#dataset HealthcareConsentStoreIamMember#dataset}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#member HealthcareConsentStoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#role HealthcareConsentStoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#id HealthcareConsentStoreIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsentStoreId`<sup>Required</sup> <a name="ConsentStoreId" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.consentStoreId"></a>

```go
ConsentStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#consent_store_id HealthcareConsentStoreIamMember#consent_store_id}.

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#dataset HealthcareConsentStoreIamMember#dataset}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#member HealthcareConsentStoreIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#role HealthcareConsentStoreIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.condition"></a>

```go
Condition HealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#condition HealthcareConsentStoreIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_consent_store_iam_member#id HealthcareConsentStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareConsentStoreIamMemberConditionOutputReference <a name="HealthcareConsentStoreIamMemberConditionOutputReference" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcareconsentstoreiammember"

healthcareconsentstoreiammember.NewHealthcareConsentStoreIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareConsentStoreIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareConsentStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareConsentStoreIamMember.HealthcareConsentStoreIamMemberCondition">HealthcareConsentStoreIamMemberCondition</a>

---



