# `healthcareDicomStoreIamMember` Submodule <a name="`healthcareDicomStoreIamMember` Submodule" id="@cdktf/provider-google.healthcareDicomStoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareDicomStoreIamMember <a name="HealthcareDicomStoreIamMember" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member google_healthcare_dicom_store_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

healthcaredicomstoreiammember.NewHealthcareDicomStoreIamMember(scope Construct, id *string, config HealthcareDicomStoreIamMemberConfig) HealthcareDicomStoreIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig">HealthcareDicomStoreIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig">HealthcareDicomStoreIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.putCondition"></a>

```go
func PutCondition(value HealthcareDicomStoreIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

healthcaredicomstoreiammember.HealthcareDicomStoreIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

healthcaredicomstoreiammember.HealthcareDicomStoreIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

healthcaredicomstoreiammember.HealthcareDicomStoreIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference">HealthcareDicomStoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.dicomStoreIdInput">DicomStoreIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.dicomStoreId">DicomStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.condition"></a>

```go
func Condition() HealthcareDicomStoreIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference">HealthcareDicomStoreIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.conditionInput"></a>

```go
func ConditionInput() HealthcareDicomStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a>

---

##### `DicomStoreIdInput`<sup>Optional</sup> <a name="DicomStoreIdInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.dicomStoreIdInput"></a>

```go
func DicomStoreIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `DicomStoreId`<sup>Required</sup> <a name="DicomStoreId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.dicomStoreId"></a>

```go
func DicomStoreId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareDicomStoreIamMemberCondition <a name="HealthcareDicomStoreIamMemberCondition" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

&healthcaredicomstoreiammember.HealthcareDicomStoreIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#expression HealthcareDicomStoreIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#title HealthcareDicomStoreIamMember#title}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#description HealthcareDicomStoreIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#expression HealthcareDicomStoreIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#title HealthcareDicomStoreIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#description HealthcareDicomStoreIamMember#description}.

---

### HealthcareDicomStoreIamMemberConfig <a name="HealthcareDicomStoreIamMemberConfig" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

&healthcaredicomstoreiammember.HealthcareDicomStoreIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DicomStoreId: *string,
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.dicomStoreId">DicomStoreId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#dicom_store_id HealthcareDicomStoreIamMember#dicom_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#member HealthcareDicomStoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#role HealthcareDicomStoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#id HealthcareDicomStoreIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DicomStoreId`<sup>Required</sup> <a name="DicomStoreId" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.dicomStoreId"></a>

```go
DicomStoreId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#dicom_store_id HealthcareDicomStoreIamMember#dicom_store_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#member HealthcareDicomStoreIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#role HealthcareDicomStoreIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.condition"></a>

```go
Condition HealthcareDicomStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#condition HealthcareDicomStoreIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_dicom_store_iam_member#id HealthcareDicomStoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareDicomStoreIamMemberConditionOutputReference <a name="HealthcareDicomStoreIamMemberConditionOutputReference" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcaredicomstoreiammember"

healthcaredicomstoreiammember.NewHealthcareDicomStoreIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareDicomStoreIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareDicomStoreIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.healthcareDicomStoreIamMember.HealthcareDicomStoreIamMemberCondition">HealthcareDicomStoreIamMemberCondition</a>

---



