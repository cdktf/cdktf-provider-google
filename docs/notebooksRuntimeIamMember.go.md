# `google_notebooks_runtime_iam_member`

Refer to the Terraform Registory for docs: [`google_notebooks_runtime_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member).

# `notebooksRuntimeIamMember` Submodule <a name="`notebooksRuntimeIamMember` Submodule" id="@cdktf/provider-google.notebooksRuntimeIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotebooksRuntimeIamMember <a name="NotebooksRuntimeIamMember" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member google_notebooks_runtime_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

notebooksruntimeiammember.NewNotebooksRuntimeIamMember(scope Construct, id *string, config NotebooksRuntimeIamMemberConfig) NotebooksRuntimeIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig">NotebooksRuntimeIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig">NotebooksRuntimeIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.putCondition"></a>

```go
func PutCondition(value NotebooksRuntimeIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

notebooksruntimeiammember.NotebooksRuntimeIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

notebooksruntimeiammember.NotebooksRuntimeIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

notebooksruntimeiammember.NotebooksRuntimeIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference">NotebooksRuntimeIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.runtimeNameInput">RuntimeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.condition"></a>

```go
func Condition() NotebooksRuntimeIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference">NotebooksRuntimeIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.conditionInput"></a>

```go
func ConditionInput() NotebooksRuntimeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `RuntimeNameInput`<sup>Optional</sup> <a name="RuntimeNameInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.runtimeNameInput"></a>

```go
func RuntimeNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.runtimeName"></a>

```go
func RuntimeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotebooksRuntimeIamMemberCondition <a name="NotebooksRuntimeIamMemberCondition" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

&notebooksruntimeiammember.NotebooksRuntimeIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#expression NotebooksRuntimeIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#title NotebooksRuntimeIamMember#title}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#description NotebooksRuntimeIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#expression NotebooksRuntimeIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#title NotebooksRuntimeIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#description NotebooksRuntimeIamMember#description}.

---

### NotebooksRuntimeIamMemberConfig <a name="NotebooksRuntimeIamMemberConfig" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

&notebooksruntimeiammember.NotebooksRuntimeIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Member: *string,
	Role: *string,
	RuntimeName: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v7.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#member NotebooksRuntimeIamMember#member}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#role NotebooksRuntimeIamMember#role}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.runtimeName">RuntimeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#runtime_name NotebooksRuntimeIamMember#runtime_name}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#id NotebooksRuntimeIamMember#id}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#location NotebooksRuntimeIamMember#location}. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#project NotebooksRuntimeIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#member NotebooksRuntimeIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#role NotebooksRuntimeIamMember#role}.

---

##### `RuntimeName`<sup>Required</sup> <a name="RuntimeName" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.runtimeName"></a>

```go
RuntimeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#runtime_name NotebooksRuntimeIamMember#runtime_name}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.condition"></a>

```go
Condition NotebooksRuntimeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#condition NotebooksRuntimeIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#id NotebooksRuntimeIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#location NotebooksRuntimeIamMember#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.62.1/docs/resources/notebooks_runtime_iam_member#project NotebooksRuntimeIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### NotebooksRuntimeIamMemberConditionOutputReference <a name="NotebooksRuntimeIamMemberConditionOutputReference" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v7/notebooksruntimeiammember"

notebooksruntimeiammember.NewNotebooksRuntimeIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NotebooksRuntimeIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() NotebooksRuntimeIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.notebooksRuntimeIamMember.NotebooksRuntimeIamMemberCondition">NotebooksRuntimeIamMemberCondition</a>

---



