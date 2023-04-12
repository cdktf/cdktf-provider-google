# `iapAppEngineServiceIamMember` Submodule <a name="`iapAppEngineServiceIamMember` Submodule" id="@cdktf/provider-google.iapAppEngineServiceIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IapAppEngineServiceIamMember <a name="IapAppEngineServiceIamMember" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member google_iap_app_engine_service_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

iapappengineserviceiammember.NewIapAppEngineServiceIamMember(scope Construct, id *string, config IapAppEngineServiceIamMemberConfig) IapAppEngineServiceIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig">IapAppEngineServiceIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig">IapAppEngineServiceIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition"></a>

```go
func PutCondition(value IapAppEngineServiceIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

iapappengineserviceiammember.IapAppEngineServiceIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

iapappengineserviceiammember.IapAppEngineServiceIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

iapappengineserviceiammember.IapAppEngineServiceIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference">IapAppEngineServiceIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.condition"></a>

```go
func Condition() IapAppEngineServiceIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference">IapAppEngineServiceIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.conditionInput"></a>

```go
func ConditionInput() IapAppEngineServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IapAppEngineServiceIamMemberCondition <a name="IapAppEngineServiceIamMemberCondition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

&iapappengineserviceiammember.IapAppEngineServiceIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#expression IapAppEngineServiceIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#title IapAppEngineServiceIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#description IapAppEngineServiceIamMember#description}.

---

### IapAppEngineServiceIamMemberConfig <a name="IapAppEngineServiceIamMemberConfig" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

&iapappengineserviceiammember.IapAppEngineServiceIamMemberConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Member: *string,
	Role: *string,
	Service: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.appId">AppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.service">Service</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#app_id IapAppEngineServiceIamMember#app_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#member IapAppEngineServiceIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#role IapAppEngineServiceIamMember#role}.

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#service IapAppEngineServiceIamMember#service}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.condition"></a>

```go
Condition IapAppEngineServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#condition IapAppEngineServiceIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#id IapAppEngineServiceIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iap_app_engine_service_iam_member#project IapAppEngineServiceIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### IapAppEngineServiceIamMemberConditionOutputReference <a name="IapAppEngineServiceIamMemberConditionOutputReference" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/iapappengineserviceiammember"

iapappengineserviceiammember.NewIapAppEngineServiceIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IapAppEngineServiceIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() IapAppEngineServiceIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.iapAppEngineServiceIamMember.IapAppEngineServiceIamMemberCondition">IapAppEngineServiceIamMemberCondition</a>

---



