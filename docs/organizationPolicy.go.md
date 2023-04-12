# `organizationPolicy` Submodule <a name="`organizationPolicy` Submodule" id="@cdktf/provider-google.organizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationPolicy <a name="OrganizationPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/organization_policy google_organization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicy(scope Construct, id *string, config OrganizationPolicyConfig) OrganizationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig">OrganizationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig">OrganizationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy">PutBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy">PutListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy">PutRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetBooleanPolicy">ResetBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetListPolicy">ResetListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetRestorePolicy">ResetRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutBooleanPolicy` <a name="PutBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy"></a>

```go
func PutBooleanPolicy(value OrganizationPolicyBooleanPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putBooleanPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---

##### `PutListPolicy` <a name="PutListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy"></a>

```go
func PutListPolicy(value OrganizationPolicyListPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putListPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---

##### `PutRestorePolicy` <a name="PutRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy"></a>

```go
func PutRestorePolicy(value OrganizationPolicyRestorePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putRestorePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts"></a>

```go
func PutTimeouts(value OrganizationPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

---

##### `ResetBooleanPolicy` <a name="ResetBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetBooleanPolicy"></a>

```go
func ResetBooleanPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetListPolicy` <a name="ResetListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetListPolicy"></a>

```go
func ResetListPolicy()
```

##### `ResetRestorePolicy` <a name="ResetRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetRestorePolicy"></a>

```go
func ResetRestorePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.resetVersion"></a>

```go
func ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.OrganizationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.OrganizationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.OrganizationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference">OrganizationPolicyBooleanPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference">OrganizationPolicyListPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference">OrganizationPolicyRestorePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference">OrganizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicyInput">BooleanPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraintInput">ConstraintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicyInput">ListPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicyInput">RestorePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.version">Version</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BooleanPolicy`<sup>Required</sup> <a name="BooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicy"></a>

```go
func BooleanPolicy() OrganizationPolicyBooleanPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference">OrganizationPolicyBooleanPolicyOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ListPolicy`<sup>Required</sup> <a name="ListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicy"></a>

```go
func ListPolicy() OrganizationPolicyListPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference">OrganizationPolicyListPolicyOutputReference</a>

---

##### `RestorePolicy`<sup>Required</sup> <a name="RestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicy"></a>

```go
func RestorePolicy() OrganizationPolicyRestorePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference">OrganizationPolicyRestorePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeouts"></a>

```go
func Timeouts() OrganizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference">OrganizationPolicyTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BooleanPolicyInput`<sup>Optional</sup> <a name="BooleanPolicyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.booleanPolicyInput"></a>

```go
func BooleanPolicyInput() OrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---

##### `ConstraintInput`<sup>Optional</sup> <a name="ConstraintInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraintInput"></a>

```go
func ConstraintInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListPolicyInput`<sup>Optional</sup> <a name="ListPolicyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.listPolicyInput"></a>

```go
func ListPolicyInput() OrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `RestorePolicyInput`<sup>Optional</sup> <a name="RestorePolicyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.restorePolicyInput"></a>

```go
func RestorePolicyInput() OrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationPolicyBooleanPolicy <a name="OrganizationPolicyBooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyBooleanPolicy {
	Enforced: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.property.enforced">Enforced</a></code> | <code>interface{}</code> | If true, then the Policy is enforced. If false, then any configuration is acceptable. |

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy.property.enforced"></a>

```go
Enforced interface{}
```

- *Type:* interface{}

If true, then the Policy is enforced. If false, then any configuration is acceptable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#enforced OrganizationPolicy#enforced}

---

### OrganizationPolicyConfig <a name="OrganizationPolicyConfig" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Constraint: *string,
	OrgId: *string,
	BooleanPolicy: github.com/cdktf/cdktf-provider-google-go/google.organizationPolicy.OrganizationPolicyBooleanPolicy,
	Id: *string,
	ListPolicy: github.com/cdktf/cdktf-provider-google-go/google.organizationPolicy.OrganizationPolicyListPolicy,
	RestorePolicy: github.com/cdktf/cdktf-provider-google-go/google.organizationPolicy.OrganizationPolicyRestorePolicy,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.organizationPolicy.OrganizationPolicyTimeouts,
	Version: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.constraint">Constraint</a></code> | <code>*string</code> | The name of the Constraint the Policy is configuring, for example, serviceuser.services. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.orgId">OrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#org_id OrganizationPolicy#org_id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.booleanPolicy">BooleanPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | boolean_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#id OrganizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.listPolicy">ListPolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | list_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.restorePolicy">RestorePolicy</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | restore_policy block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.version">Version</a></code> | <code>*f64</code> | Version of the Policy. Default version is 0. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.constraint"></a>

```go
Constraint *string
```

- *Type:* *string

The name of the Constraint the Policy is configuring, for example, serviceuser.services.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#constraint OrganizationPolicy#constraint}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#org_id OrganizationPolicy#org_id}.

---

##### `BooleanPolicy`<sup>Optional</sup> <a name="BooleanPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.booleanPolicy"></a>

```go
BooleanPolicy OrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

boolean_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#boolean_policy OrganizationPolicy#boolean_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#id OrganizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListPolicy`<sup>Optional</sup> <a name="ListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.listPolicy"></a>

```go
ListPolicy OrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

list_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#list_policy OrganizationPolicy#list_policy}

---

##### `RestorePolicy`<sup>Optional</sup> <a name="RestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.restorePolicy"></a>

```go
RestorePolicy OrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

restore_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#restore_policy OrganizationPolicy#restore_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.timeouts"></a>

```go
Timeouts OrganizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts">OrganizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#timeouts OrganizationPolicy#timeouts}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyConfig.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Version of the Policy. Default version is 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#version OrganizationPolicy#version}

---

### OrganizationPolicyListPolicy <a name="OrganizationPolicyListPolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyListPolicy {
	Allow: github.com/cdktf/cdktf-provider-google-go/google.organizationPolicy.OrganizationPolicyListPolicyAllow,
	Deny: github.com/cdktf/cdktf-provider-google-go/google.organizationPolicy.OrganizationPolicyListPolicyDeny,
	InheritFromParent: interface{},
	SuggestedValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.inheritFromParent">InheritFromParent</a></code> | <code>interface{}</code> | If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.suggestedValue">SuggestedValue</a></code> | <code>*string</code> | The Google Cloud Console will try to default to a configuration that matches the value specified in this field. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.allow"></a>

```go
Allow OrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

allow block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#allow OrganizationPolicy#allow}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.deny"></a>

```go
Deny OrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

deny block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#deny OrganizationPolicy#deny}

---

##### `InheritFromParent`<sup>Optional</sup> <a name="InheritFromParent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.inheritFromParent"></a>

```go
InheritFromParent interface{}
```

- *Type:* interface{}

If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#inherit_from_parent OrganizationPolicy#inherit_from_parent}

---

##### `SuggestedValue`<sup>Optional</sup> <a name="SuggestedValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy.property.suggestedValue"></a>

```go
SuggestedValue *string
```

- *Type:* *string

The Google Cloud Console will try to default to a configuration that matches the value specified in this field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#suggested_value OrganizationPolicy#suggested_value}

---

### OrganizationPolicyListPolicyAllow <a name="OrganizationPolicyListPolicyAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyListPolicyAllow {
	All: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.all">All</a></code> | <code>interface{}</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.values">Values</a></code> | <code>*[]*string</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#all OrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#values OrganizationPolicy#values}

---

### OrganizationPolicyListPolicyDeny <a name="OrganizationPolicyListPolicyDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyListPolicyDeny {
	All: interface{},
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.all">All</a></code> | <code>interface{}</code> | The policy allows or denies all values. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.values">Values</a></code> | <code>*[]*string</code> | The policy can define specific values that are allowed or denied. |

---

##### `All`<sup>Optional</sup> <a name="All" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.all"></a>

```go
All interface{}
```

- *Type:* interface{}

The policy allows or denies all values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#all OrganizationPolicy#all}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The policy can define specific values that are allowed or denied.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#values OrganizationPolicy#values}

---

### OrganizationPolicyRestorePolicy <a name="OrganizationPolicyRestorePolicy" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyRestorePolicy {
	Default: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.property.default">Default</a></code> | <code>interface{}</code> | May only be set to true. If set, then the default Policy is restored. |

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy.property.default"></a>

```go
Default interface{}
```

- *Type:* interface{}

May only be set to true. If set, then the default Policy is restored.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#default OrganizationPolicy#default}

---

### OrganizationPolicyTimeouts <a name="OrganizationPolicyTimeouts" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

&organizationpolicy.OrganizationPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#create OrganizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#delete OrganizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#read OrganizationPolicy#read}. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#update OrganizationPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#create OrganizationPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#delete OrganizationPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#read OrganizationPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy#update OrganizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationPolicyBooleanPolicyOutputReference <a name="OrganizationPolicyBooleanPolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicyBooleanPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationPolicyBooleanPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput">EnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforced">Enforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforcedInput`<sup>Optional</sup> <a name="EnforcedInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforcedInput"></a>

```go
func EnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `Enforced`<sup>Required</sup> <a name="Enforced" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.enforced"></a>

```go
func Enforced() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationPolicyBooleanPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyBooleanPolicy">OrganizationPolicyBooleanPolicy</a>

---


### OrganizationPolicyListPolicyAllowOutputReference <a name="OrganizationPolicyListPolicyAllowOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicyListPolicyAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationPolicyListPolicyAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---


### OrganizationPolicyListPolicyDenyOutputReference <a name="OrganizationPolicyListPolicyDenyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicyListPolicyDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationPolicyListPolicyDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetAll">ResetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAll` <a name="ResetAll" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetAll"></a>

```go
func ResetAll()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.allInput">AllInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.all">All</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllInput`<sup>Optional</sup> <a name="AllInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.allInput"></a>

```go
func AllInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `All`<sup>Required</sup> <a name="All" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.all"></a>

```go
func All() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---


### OrganizationPolicyListPolicyOutputReference <a name="OrganizationPolicyListPolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicyListPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationPolicyListPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetInheritFromParent">ResetInheritFromParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetSuggestedValue">ResetSuggestedValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow"></a>

```go
func PutAllow(value OrganizationPolicyListPolicyAllow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny"></a>

```go
func PutDeny(value OrganizationPolicyListPolicyDeny)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetDeny"></a>

```go
func ResetDeny()
```

##### `ResetInheritFromParent` <a name="ResetInheritFromParent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetInheritFromParent"></a>

```go
func ResetInheritFromParent()
```

##### `ResetSuggestedValue` <a name="ResetSuggestedValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.resetSuggestedValue"></a>

```go
func ResetSuggestedValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference">OrganizationPolicyListPolicyAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference">OrganizationPolicyListPolicyDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput">InheritFromParentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValueInput">SuggestedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParent">InheritFromParent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValue">SuggestedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allow"></a>

```go
func Allow() OrganizationPolicyListPolicyAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllowOutputReference">OrganizationPolicyListPolicyAllowOutputReference</a>

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.deny"></a>

```go
func Deny() OrganizationPolicyListPolicyDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDenyOutputReference">OrganizationPolicyListPolicyDenyOutputReference</a>

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.allowInput"></a>

```go
func AllowInput() OrganizationPolicyListPolicyAllow
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyAllow">OrganizationPolicyListPolicyAllow</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.denyInput"></a>

```go
func DenyInput() OrganizationPolicyListPolicyDeny
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyDeny">OrganizationPolicyListPolicyDeny</a>

---

##### `InheritFromParentInput`<sup>Optional</sup> <a name="InheritFromParentInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParentInput"></a>

```go
func InheritFromParentInput() interface{}
```

- *Type:* interface{}

---

##### `SuggestedValueInput`<sup>Optional</sup> <a name="SuggestedValueInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValueInput"></a>

```go
func SuggestedValueInput() *string
```

- *Type:* *string

---

##### `InheritFromParent`<sup>Required</sup> <a name="InheritFromParent" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.inheritFromParent"></a>

```go
func InheritFromParent() interface{}
```

- *Type:* interface{}

---

##### `SuggestedValue`<sup>Required</sup> <a name="SuggestedValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.suggestedValue"></a>

```go
func SuggestedValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationPolicyListPolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyListPolicy">OrganizationPolicyListPolicy</a>

---


### OrganizationPolicyRestorePolicyOutputReference <a name="OrganizationPolicyRestorePolicyOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicyRestorePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationPolicyRestorePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.defaultInput">DefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.default">Default</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.defaultInput"></a>

```go
func DefaultInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.default"></a>

```go
func Default() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() OrganizationPolicyRestorePolicy
```

- *Type:* <a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyRestorePolicy">OrganizationPolicyRestorePolicy</a>

---


### OrganizationPolicyTimeoutsOutputReference <a name="OrganizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationpolicy"

organizationpolicy.NewOrganizationPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationPolicy.OrganizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



