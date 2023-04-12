# `projectOrganizationPolicy` Submodule <a name="`projectOrganizationPolicy` Submodule" id="@cdktf/provider-google.projectOrganizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectOrganizationPolicy <a name="ProjectOrganizationPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy google_project_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicy(scope Construct, id *string, config ProjectOrganizationPolicyConfig) ProjectOrganizationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig">ProjectOrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig">ProjectOrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy">PutBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy">PutListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetBooleanPolicy">ResetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetListPolicy">ResetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBooleanPolicy` <a name="PutBooleanPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy"></a>

```go
func PutBooleanPolicy(value ProjectOrganizationPolicyBooleanPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---

##### `PutListPolicy` <a name="PutListPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy"></a>

```go
func PutListPolicy(value ProjectOrganizationPolicyListPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy"></a>

```go
func PutRestorePolicy(value ProjectOrganizationPolicyRestorePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ProjectOrganizationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

---

##### `ResetBooleanPolicy` <a name="ResetBooleanPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetBooleanPolicy"></a>

```go
func ResetBooleanPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetListPolicy` <a name="ResetListPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetListPolicy"></a>

```go
func ResetListPolicy()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetRestorePolicy"></a>

```go
func ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.ProjectOrganizationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.ProjectOrganizationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.ProjectOrganizationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference">ProjectOrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference">ProjectOrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference">ProjectOrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference">ProjectOrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicyInput">BooleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicyInput">ListPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BooleanPolicy`<sup>Required</sup> <a name="BooleanPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicy"></a>

```go
func BooleanPolicy() ProjectOrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference">ProjectOrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ListPolicy`<sup>Required</sup> <a name="ListPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicy"></a>

```go
func ListPolicy() ProjectOrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference">ProjectOrganizationPolicyListPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicy"></a>

```go
func RestorePolicy() ProjectOrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference">ProjectOrganizationPolicyRestorePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeouts"></a>

```go
func Timeouts() ProjectOrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference">ProjectOrganizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BooleanPolicyInput`<sup>Optional</sup> <a name="BooleanPolicyInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.booleanPolicyInput"></a>

```go
func BooleanPolicyInput() ProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListPolicyInput`<sup>Optional</sup> <a name="ListPolicyInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.listPolicyInput"></a>

```go
func ListPolicyInput() ProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.restorePolicyInput"></a>

```go
func RestorePolicyInput() ProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectOrganizationPolicyBooleanPolicy <a name="ProjectOrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyBooleanPolicy {
	Enforced: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.property.enforced">Enforced</a></code> | <code>interface{}</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy.property.enforced"></a>

```go
Enforced interface{}
```

- *Type:* interface{}

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#enforced ProjectOrganizationPolicy#enforced}

---

### ProjectOrganizationPolicyConfig <a name="ProjectOrganizationPolicyConfig" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Constraint: *string,
	Project: *string,
	BooleanPolicy: github.com/cdktf/cdktf-provider-google-go/google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy,
	Id: *string,
	ListPolicy: github.com/cdktf/cdktf-provider-google-go/google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy,
	RestorePolicy: github.com/cdktf/cdktf-provider-google-go/google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.constraint">Constraint</a></code> | <code>*string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.project">Project</a></code> | <code>*string</code> | The project ID. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#id ProjectOrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.version">Version</a></code> | <code>*f64</code> | Version of the Policy. Default version is 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#constraint ProjectOrganizationPolicy#constraint}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#project ProjectOrganizationPolicy#project}

---

##### `BooleanPolicy`<sup>Optional</sup> <a name="BooleanPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.booleanPolicy"></a>

```go
BooleanPolicy ProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#boolean_policy ProjectOrganizationPolicy#boolean_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#id ProjectOrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListPolicy`<sup>Optional</sup> <a name="ListPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.listPolicy"></a>

```go
ListPolicy ProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#list_policy ProjectOrganizationPolicy#list_policy}

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.restorePolicy"></a>

```go
RestorePolicy ProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#restore_policy ProjectOrganizationPolicy#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.timeouts"></a>

```go
Timeouts ProjectOrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts">ProjectOrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#timeouts ProjectOrganizationPolicy#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#version ProjectOrganizationPolicy#version}

---

### ProjectOrganizationPolicyListPolicy <a name="ProjectOrganizationPolicyListPolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyListPolicy {
	Allow: github.com/cdktf/cdktf-provider-google-go/google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow,
	Deny: github.com/cdktf/cdktf-provider-google-go/google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny,
	InheritFromParent: interface{},
	SuggestedValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.inheritFromParent">InheritFromParent</a></code> | <code>interface{}</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.suggestedValue">SuggestedValue</a></code> | <code>*string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.allow"></a>

```go
Allow ProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#allow ProjectOrganizationPolicy#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.deny"></a>

```go
Deny ProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#deny ProjectOrganizationPolicy#deny}

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.inheritFromParent"></a>

```go
InheritFromParent interface{}
```

- *Type:* interface{}

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#inherit_from_parent ProjectOrganizationPolicy#inherit_from_parent}

---

##### `SuggestedValue`<sup>Optional</sup> <a name="SuggestedValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy.property.suggestedValue"></a>

```go
SuggestedValue *string
```

- *Type:* *string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#suggested_value ProjectOrganizationPolicy#suggested_value}

---

### ProjectOrganizationPolicyListPolicyAllow <a name="ProjectOrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyListPolicyAllow {
	All: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.all">All</a></code> | <code>interface{}</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.values">Values</a></code> | <code>*[]*string</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#all ProjectOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#values ProjectOrganizationPolicy#values}

---

### ProjectOrganizationPolicyListPolicyDeny <a name="ProjectOrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyListPolicyDeny {
	All: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.all">All</a></code> | <code>interface{}</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.values">Values</a></code> | <code>*[]*string</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#all ProjectOrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#values ProjectOrganizationPolicy#values}

---

### ProjectOrganizationPolicyRestorePolicy <a name="ProjectOrganizationPolicyRestorePolicy" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyRestorePolicy {
	Default: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.property.default">Default</a></code> | <code>interface{}</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#default ProjectOrganizationPolicy#default}

---

### ProjectOrganizationPolicyTimeouts <a name="ProjectOrganizationPolicyTimeouts" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

&projectorganizationpolicy.ProjectOrganizationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#create ProjectOrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#delete ProjectOrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#read ProjectOrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#update ProjectOrganizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#create ProjectOrganizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#delete ProjectOrganizationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#read ProjectOrganizationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy#update ProjectOrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ProjectOrganizationPolicyBooleanPolicyOutputReference <a name="ProjectOrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicyBooleanPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectOrganizationPolicyBooleanPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced">Enforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```go
func Enforced() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectOrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyBooleanPolicy">ProjectOrganizationPolicyBooleanPolicy</a>

---


### ProjectOrganizationPolicyListPolicyAllowOutputReference <a name="ProjectOrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicyListPolicyAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectOrganizationPolicyListPolicyAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---


### ProjectOrganizationPolicyListPolicyDenyOutputReference <a name="ProjectOrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicyListPolicyDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectOrganizationPolicyListPolicyDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---


### ProjectOrganizationPolicyListPolicyOutputReference <a name="ProjectOrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicyListPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectOrganizationPolicyListPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue">ResetSuggestedValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow"></a>

```go
func PutAllow(value ProjectOrganizationPolicyListPolicyAllow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny"></a>

```go
func PutDeny(value ProjectOrganizationPolicyListPolicyDeny)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```go
func ResetDeny()
```

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```go
func ResetInheritFromParent()
```

##### `ResetSuggestedValue` <a name="ResetSuggestedValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```go
func ResetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference">ProjectOrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference">ProjectOrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">SuggestedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue">SuggestedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allow"></a>

```go
func Allow() ProjectOrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllowOutputReference">ProjectOrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.deny"></a>

```go
func Deny() ProjectOrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDenyOutputReference">ProjectOrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```go
func AllowInput() ProjectOrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyAllow">ProjectOrganizationPolicyListPolicyAllow</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```go
func DenyInput() ProjectOrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyDeny">ProjectOrganizationPolicyListPolicyDeny</a>

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```go
func InheritFromParentInput() interface{}
```

- *Type:* interface{}

---

##### `SuggestedValueInput`<sup>Optional</sup> <a name="SuggestedValueInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```go
func SuggestedValueInput() *string
```

- *Type:* *string

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```go
func InheritFromParent() interface{}
```

- *Type:* interface{}

---

##### `SuggestedValue`<sup>Required</sup> <a name="SuggestedValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```go
func SuggestedValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectOrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyListPolicy">ProjectOrganizationPolicyListPolicy</a>

---


### ProjectOrganizationPolicyRestorePolicyOutputReference <a name="ProjectOrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicyRestorePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectOrganizationPolicyRestorePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ProjectOrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyRestorePolicy">ProjectOrganizationPolicyRestorePolicy</a>

---


### ProjectOrganizationPolicyTimeoutsOutputReference <a name="ProjectOrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/projectorganizationpolicy"

projectorganizationpolicy.NewProjectOrganizationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ProjectOrganizationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.projectOrganizationPolicy.ProjectOrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



