# `organizationAccessApprovalSettings` Submodule <a name="`organizationAccessApprovalSettings` Submodule" id="@cdktf/provider-google.organizationAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationAccessApprovalSettings <a name="OrganizationAccessApprovalSettings" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings google_organization_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.NewOrganizationAccessApprovalSettings(scope Construct, id *string, config OrganizationAccessApprovalSettingsConfig) OrganizationAccessApprovalSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig">OrganizationAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig">OrganizationAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putEnrolledServices">PutEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetActiveKeyVersion">ResetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetNotificationEmails">ResetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEnrolledServices` <a name="PutEnrolledServices" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putEnrolledServices"></a>

```go
func PutEnrolledServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts"></a>

```go
func PutTimeouts(value OrganizationAccessApprovalSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>

---

##### `ResetActiveKeyVersion` <a name="ResetActiveKeyVersion" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetActiveKeyVersion"></a>

```go
func ResetActiveKeyVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationEmails` <a name="ResetNotificationEmails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetNotificationEmails"></a>

```go
func ResetNotificationEmails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.OrganizationAccessApprovalSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.OrganizationAccessApprovalSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.OrganizationAccessApprovalSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion">AncestorHasActiveKeyVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledAncestor">EnrolledAncestor</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServices">EnrolledServices</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList">OrganizationAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.invalidKeyVersion">InvalidKeyVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference">OrganizationAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersionInput">ActiveKeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServicesInput">EnrolledServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmailsInput">NotificationEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationIdInput">OrganizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationId">OrganizationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorHasActiveKeyVersion`<sup>Required</sup> <a name="AncestorHasActiveKeyVersion" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```go
func AncestorHasActiveKeyVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnrolledAncestor`<sup>Required</sup> <a name="EnrolledAncestor" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledAncestor"></a>

```go
func EnrolledAncestor() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServices"></a>

```go
func EnrolledServices() OrganizationAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList">OrganizationAccessApprovalSettingsEnrolledServicesList</a>

---

##### `InvalidKeyVersion`<sup>Required</sup> <a name="InvalidKeyVersion" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.invalidKeyVersion"></a>

```go
func InvalidKeyVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeouts"></a>

```go
func Timeouts() OrganizationAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference">OrganizationAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `ActiveKeyVersionInput`<sup>Optional</sup> <a name="ActiveKeyVersionInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersionInput"></a>

```go
func ActiveKeyVersionInput() *string
```

- *Type:* *string

---

##### `EnrolledServicesInput`<sup>Optional</sup> <a name="EnrolledServicesInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.enrolledServicesInput"></a>

```go
func EnrolledServicesInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationEmailsInput`<sup>Optional</sup> <a name="NotificationEmailsInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmailsInput"></a>

```go
func NotificationEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationIdInput`<sup>Optional</sup> <a name="OrganizationIdInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationIdInput"></a>

```go
func OrganizationIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.activeKeyVersion"></a>

```go
func ActiveKeyVersion() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationEmails`<sup>Required</sup> <a name="NotificationEmails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.notificationEmails"></a>

```go
func NotificationEmails() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.organizationId"></a>

```go
func OrganizationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationAccessApprovalSettingsConfig <a name="OrganizationAccessApprovalSettingsConfig" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

&organizationaccessapprovalsettings.OrganizationAccessApprovalSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnrolledServices: interface{},
	OrganizationId: *string,
	ActiveKeyVersion: *string,
	Id: *string,
	NotificationEmails: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.enrolledServices">EnrolledServices</a></code> | <code>interface{}</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.organizationId">OrganizationId</a></code> | <code>*string</code> | ID of the organization of the access approval settings. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#id OrganizationAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.enrolledServices"></a>

```go
EnrolledServices interface{}
```

- *Type:* interface{}

enrolled_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#enrolled_services OrganizationAccessApprovalSettings#enrolled_services}

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.organizationId"></a>

```go
OrganizationId *string
```

- *Type:* *string

ID of the organization of the access approval settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#organization_id OrganizationAccessApprovalSettings#organization_id}

---

##### `ActiveKeyVersion`<sup>Optional</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```go
ActiveKeyVersion *string
```

- *Type:* *string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#active_key_version OrganizationAccessApprovalSettings#active_key_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#id OrganizationAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationEmails`<sup>Optional</sup> <a name="NotificationEmails" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.notificationEmails"></a>

```go
NotificationEmails *[]*string
```

- *Type:* *[]*string

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#notification_emails OrganizationAccessApprovalSettings#notification_emails}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsConfig.property.timeouts"></a>

```go
Timeouts OrganizationAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts">OrganizationAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#timeouts OrganizationAccessApprovalSettings#timeouts}

---

### OrganizationAccessApprovalSettingsEnrolledServices <a name="OrganizationAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

&organizationaccessapprovalsettings.OrganizationAccessApprovalSettingsEnrolledServices {
	CloudProduct: *string,
	EnrollmentLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive): all appengine.googleapis.com bigquery.googleapis.com bigtable.googleapis.com cloudkms.googleapis.com compute.googleapis.com dataflow.googleapis.com iam.googleapis.com pubsub.googleapis.com storage.googleapis.com. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```go
CloudProduct *string
```

- *Type:* *string

The product for which Access Approval will be enrolled. Allowed values are listed (case-sensitive): all appengine.googleapis.com bigquery.googleapis.com bigtable.googleapis.com cloudkms.googleapis.com compute.googleapis.com dataflow.googleapis.com iam.googleapis.com pubsub.googleapis.com storage.googleapis.com.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#cloud_product OrganizationAccessApprovalSettings#cloud_product}

---

##### `EnrollmentLevel`<sup>Optional</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```go
EnrollmentLevel *string
```

- *Type:* *string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#enrollment_level OrganizationAccessApprovalSettings#enrollment_level}

---

### OrganizationAccessApprovalSettingsTimeouts <a name="OrganizationAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

&organizationaccessapprovalsettings.OrganizationAccessApprovalSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#create OrganizationAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#delete OrganizationAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#update OrganizationAccessApprovalSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#create OrganizationAccessApprovalSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#delete OrganizationAccessApprovalSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_access_approval_settings#update OrganizationAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationAccessApprovalSettingsEnrolledServicesList <a name="OrganizationAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.NewOrganizationAccessApprovalSettingsEnrolledServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OrganizationAccessApprovalSettingsEnrolledServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.get"></a>

```go
func Get(index *f64) OrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OrganizationAccessApprovalSettingsEnrolledServicesOutputReference <a name="OrganizationAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.NewOrganizationAccessApprovalSettingsEnrolledServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OrganizationAccessApprovalSettingsEnrolledServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">ResetEnrollmentLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnrollmentLevel` <a name="ResetEnrollmentLevel" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```go
func ResetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">CloudProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">EnrollmentLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProductInput`<sup>Optional</sup> <a name="CloudProductInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```go
func CloudProductInput() *string
```

- *Type:* *string

---

##### `EnrollmentLevelInput`<sup>Optional</sup> <a name="EnrollmentLevelInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```go
func EnrollmentLevelInput() *string
```

- *Type:* *string

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```go
func CloudProduct() *string
```

- *Type:* *string

---

##### `EnrollmentLevel`<sup>Required</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```go
func EnrollmentLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OrganizationAccessApprovalSettingsTimeoutsOutputReference <a name="OrganizationAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/organizationaccessapprovalsettings"

organizationaccessapprovalsettings.NewOrganizationAccessApprovalSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OrganizationAccessApprovalSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.organizationAccessApprovalSettings.OrganizationAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



