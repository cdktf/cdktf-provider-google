# `accessContextManagerAuthorizedOrgsDesc` Submodule <a name="`accessContextManagerAuthorizedOrgsDesc` Submodule" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessContextManagerAuthorizedOrgsDesc <a name="AccessContextManagerAuthorizedOrgsDesc" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

accesscontextmanagerauthorizedorgsdesc.NewAccessContextManagerAuthorizedOrgsDesc(scope Construct, id *string, config AccessContextManagerAuthorizedOrgsDescConfig) AccessContextManagerAuthorizedOrgsDesc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig">AccessContextManagerAuthorizedOrgsDescConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig">AccessContextManagerAuthorizedOrgsDescConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType">ResetAssetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection">ResetAuthorizationDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs">ResetOrgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts"></a>

```go
func PutTimeouts(value AccessContextManagerAuthorizedOrgsDescTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

---

##### `ResetAssetType` <a name="ResetAssetType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAssetType"></a>

```go
func ResetAssetType()
```

##### `ResetAuthorizationDirection` <a name="ResetAuthorizationDirection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationDirection"></a>

```go
func ResetAuthorizationDirection()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetId"></a>

```go
func ResetId()
```

##### `ResetOrgs` <a name="ResetOrgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetOrgs"></a>

```go
func ResetOrgs()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

accesscontextmanagerauthorizedorgsdesc.AccessContextManagerAuthorizedOrgsDesc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

accesscontextmanagerauthorizedorgsdesc.AccessContextManagerAuthorizedOrgsDesc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

accesscontextmanagerauthorizedorgsdesc.AccessContextManagerAuthorizedOrgsDesc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput">AssetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput">AuthorizationDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput">OrgsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType">AssetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection">AuthorizationDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs">Orgs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeouts"></a>

```go
func Timeouts() AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference">AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AssetTypeInput`<sup>Optional</sup> <a name="AssetTypeInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetTypeInput"></a>

```go
func AssetTypeInput() *string
```

- *Type:* *string

---

##### `AuthorizationDirectionInput`<sup>Optional</sup> <a name="AuthorizationDirectionInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirectionInput"></a>

```go
func AuthorizationDirectionInput() *string
```

- *Type:* *string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrgsInput`<sup>Optional</sup> <a name="OrgsInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgsInput"></a>

```go
func OrgsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.assetType"></a>

```go
func AssetType() *string
```

- *Type:* *string

---

##### `AuthorizationDirection`<sup>Required</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationDirection"></a>

```go
func AuthorizationDirection() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Orgs`<sup>Required</sup> <a name="Orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.orgs"></a>

```go
func Orgs() *[]*string
```

- *Type:* *[]*string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDesc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessContextManagerAuthorizedOrgsDescConfig <a name="AccessContextManagerAuthorizedOrgsDescConfig" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

&accesscontextmanagerauthorizedorgsdesc.AccessContextManagerAuthorizedOrgsDescConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Parent: *string,
	AssetType: *string,
	AuthorizationDirection: *string,
	AuthorizationType: *string,
	Id: *string,
	Orgs: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name">Name</a></code> | <code>*string</code> | Resource name for the 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent">Parent</a></code> | <code>*string</code> | Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType">AssetType</a></code> | <code>*string</code> | The type of entities that need to use the authorization relationship during evaluation, such as a device. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection">AuthorizationDirection</a></code> | <code>*string</code> | The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs">Orgs</a></code> | <code>*[]*string</code> | The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name for the 'AuthorizedOrgsDesc'.

Format:
'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
The 'authorized_orgs_desc' component must begin with a letter, followed by
alphanumeric characters or '_'.
After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#name AccessContextManagerAuthorizedOrgsDesc#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#parent AccessContextManagerAuthorizedOrgsDesc#parent}

---

##### `AssetType`<sup>Optional</sup> <a name="AssetType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.assetType"></a>

```go
AssetType *string
```

- *Type:* *string

The type of entities that need to use the authorization relationship during evaluation, such as a device.

Valid values are "ASSET_TYPE_DEVICE" and
"ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#asset_type AccessContextManagerAuthorizedOrgsDesc#asset_type}

---

##### `AuthorizationDirection`<sup>Optional</sup> <a name="AuthorizationDirection" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationDirection"></a>

```go
AuthorizationDirection *string
```

- *Type:* *string

The direction of the authorization relationship between this organization and the organizations listed in the "orgs" field.

The valid values for this
field include the following:

AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
in the organizations listed in the 'orgs' field.

AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
field to evaluate the traffic in this organization.

For the authorization relationship to take effect, all of the organizations
must authorize and specify the appropriate relationship direction. For
example, if organization A authorized organization B and C to evaluate its
traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
direction, organizations B and C must specify
"AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
"AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#authorization_direction AccessContextManagerAuthorizedOrgsDesc#authorization_direction}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#authorization_type AccessContextManagerAuthorizedOrgsDesc#authorization_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Orgs`<sup>Optional</sup> <a name="Orgs" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.orgs"></a>

```go
Orgs *[]*string
```

- *Type:* *[]*string

The list of organization ids in this AuthorizedOrgsDesc. Format: 'organizations/<org_number>' Example: 'organizations/123456'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#orgs AccessContextManagerAuthorizedOrgsDesc#orgs}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescConfig.property.timeouts"></a>

```go
Timeouts AccessContextManagerAuthorizedOrgsDescTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts">AccessContextManagerAuthorizedOrgsDescTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#timeouts AccessContextManagerAuthorizedOrgsDesc#timeouts}

---

### AccessContextManagerAuthorizedOrgsDescTimeouts <a name="AccessContextManagerAuthorizedOrgsDescTimeouts" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

&accesscontextmanagerauthorizedorgsdesc.AccessContextManagerAuthorizedOrgsDescTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference <a name="AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/accesscontextmanagerauthorizedorgsdesc"

accesscontextmanagerauthorizedorgsdesc.NewAccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.accessContextManagerAuthorizedOrgsDesc.AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



