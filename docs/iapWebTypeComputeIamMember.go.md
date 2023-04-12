# `iapWebTypeComputeIamMember` Submodule <a name="`iapWebTypeComputeIamMember` Submodule" id="@cdktf/provider-google.iapWebTypeComputeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapWebTypeComputeIamMember <a name="IapWebTypeComputeIamMember" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member google_iap_web_type_compute_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

iapwebtypecomputeiammember.NewIapWebTypeComputeIamMember(scope Construct, id *string, config IapWebTypeComputeIamMemberConfig) IapWebTypeComputeIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig">IapWebTypeComputeIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig">IapWebTypeComputeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.putCondition"></a>

```go
func PutCondition(value IapWebTypeComputeIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

iapwebtypecomputeiammember.IapWebTypeComputeIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

iapwebtypecomputeiammember.IapWebTypeComputeIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

iapwebtypecomputeiammember.IapWebTypeComputeIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference">IapWebTypeComputeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.condition"></a>

```go
func Condition() IapWebTypeComputeIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference">IapWebTypeComputeIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.conditionInput"></a>

```go
func ConditionInput() IapWebTypeComputeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IapWebTypeComputeIamMemberCondition <a name="IapWebTypeComputeIamMemberCondition" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

&iapwebtypecomputeiammember.IapWebTypeComputeIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#expression IapWebTypeComputeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#title IapWebTypeComputeIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#description IapWebTypeComputeIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#expression IapWebTypeComputeIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#title IapWebTypeComputeIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#description IapWebTypeComputeIamMember#description}.

---

### IapWebTypeComputeIamMemberConfig <a name="IapWebTypeComputeIamMemberConfig" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

&iapwebtypecomputeiammember.IapWebTypeComputeIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Role: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#member IapWebTypeComputeIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#role IapWebTypeComputeIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#id IapWebTypeComputeIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#project IapWebTypeComputeIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#member IapWebTypeComputeIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#role IapWebTypeComputeIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.condition"></a>

```go
Condition IapWebTypeComputeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#condition IapWebTypeComputeIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#id IapWebTypeComputeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_web_type_compute_iam_member#project IapWebTypeComputeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapWebTypeComputeIamMemberConditionOutputReference <a name="IapWebTypeComputeIamMemberConditionOutputReference" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapwebtypecomputeiammember"

iapwebtypecomputeiammember.NewIapWebTypeComputeIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IapWebTypeComputeIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() IapWebTypeComputeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapWebTypeComputeIamMember.IapWebTypeComputeIamMemberCondition">IapWebTypeComputeIamMemberCondition</a>

---



