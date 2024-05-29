# `clouddomainsRegistration` Submodule <a name="`clouddomainsRegistration` Submodule" id="@cdktf/provider-google.clouddomainsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddomainsRegistration <a name="ClouddomainsRegistration" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration google_clouddomains_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistration(scope: Construct, id: string, config: ClouddomainsRegistrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig">ClouddomainsRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig">ClouddomainsRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings">putContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings">putDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings">putManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice">putYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetContactNotices">resetContactNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDnsSettings">resetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDomainNotices">resetDomainNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetManagementSettings">resetManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContactSettings` <a name="putContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings"></a>

```typescript
public putContactSettings(value: ClouddomainsRegistrationContactSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---

##### `putDnsSettings` <a name="putDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings"></a>

```typescript
public putDnsSettings(value: ClouddomainsRegistrationDnsSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---

##### `putManagementSettings` <a name="putManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings"></a>

```typescript
public putManagementSettings(value: ClouddomainsRegistrationManagementSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts"></a>

```typescript
public putTimeouts(value: ClouddomainsRegistrationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

---

##### `putYearlyPrice` <a name="putYearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice"></a>

```typescript
public putYearlyPrice(value: ClouddomainsRegistrationYearlyPrice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---

##### `resetContactNotices` <a name="resetContactNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetContactNotices"></a>

```typescript
public resetContactNotices(): void
```

##### `resetDnsSettings` <a name="resetDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDnsSettings"></a>

```typescript
public resetDnsSettings(): void
```

##### `resetDomainNotices` <a name="resetDomainNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDomainNotices"></a>

```typescript
public resetDomainNotices(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetManagementSettings` <a name="resetManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetManagementSettings"></a>

```typescript
public resetManagementSettings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

clouddomainsRegistration.ClouddomainsRegistration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ClouddomainsRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ClouddomainsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ClouddomainsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettings">contactSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference">ClouddomainsRegistrationContactSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference">ClouddomainsRegistrationDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.issues">issues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettings">managementSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference">ClouddomainsRegistrationManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.registerFailureReason">registerFailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.supportedPrivacy">supportedPrivacy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference">ClouddomainsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPrice">yearlyPrice</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference">ClouddomainsRegistrationYearlyPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNoticesInput">contactNoticesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettingsInput">contactSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettingsInput">dnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNoticesInput">domainNoticesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettingsInput">managementSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPriceInput">yearlyPriceInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNotices">contactNotices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNotices">domainNotices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactSettings`<sup>Required</sup> <a name="contactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettings"></a>

```typescript
public readonly contactSettings: ClouddomainsRegistrationContactSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference">ClouddomainsRegistrationContactSettingsOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dnsSettings`<sup>Required</sup> <a name="dnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettings"></a>

```typescript
public readonly dnsSettings: ClouddomainsRegistrationDnsSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference">ClouddomainsRegistrationDnsSettingsOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.issues"></a>

```typescript
public readonly issues: string[];
```

- *Type:* string[]

---

##### `managementSettings`<sup>Required</sup> <a name="managementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettings"></a>

```typescript
public readonly managementSettings: ClouddomainsRegistrationManagementSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference">ClouddomainsRegistrationManagementSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `registerFailureReason`<sup>Required</sup> <a name="registerFailureReason" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.registerFailureReason"></a>

```typescript
public readonly registerFailureReason: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `supportedPrivacy`<sup>Required</sup> <a name="supportedPrivacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.supportedPrivacy"></a>

```typescript
public readonly supportedPrivacy: string[];
```

- *Type:* string[]

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddomainsRegistrationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference">ClouddomainsRegistrationTimeoutsOutputReference</a>

---

##### `yearlyPrice`<sup>Required</sup> <a name="yearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPrice"></a>

```typescript
public readonly yearlyPrice: ClouddomainsRegistrationYearlyPriceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference">ClouddomainsRegistrationYearlyPriceOutputReference</a>

---

##### `contactNoticesInput`<sup>Optional</sup> <a name="contactNoticesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNoticesInput"></a>

```typescript
public readonly contactNoticesInput: string[];
```

- *Type:* string[]

---

##### `contactSettingsInput`<sup>Optional</sup> <a name="contactSettingsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettingsInput"></a>

```typescript
public readonly contactSettingsInput: ClouddomainsRegistrationContactSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---

##### `dnsSettingsInput`<sup>Optional</sup> <a name="dnsSettingsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettingsInput"></a>

```typescript
public readonly dnsSettingsInput: ClouddomainsRegistrationDnsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `domainNoticesInput`<sup>Optional</sup> <a name="domainNoticesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNoticesInput"></a>

```typescript
public readonly domainNoticesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `managementSettingsInput`<sup>Optional</sup> <a name="managementSettingsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettingsInput"></a>

```typescript
public readonly managementSettingsInput: ClouddomainsRegistrationManagementSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ClouddomainsRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

---

##### `yearlyPriceInput`<sup>Optional</sup> <a name="yearlyPriceInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPriceInput"></a>

```typescript
public readonly yearlyPriceInput: ClouddomainsRegistrationYearlyPrice;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---

##### `contactNotices`<sup>Required</sup> <a name="contactNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNotices"></a>

```typescript
public readonly contactNotices: string[];
```

- *Type:* string[]

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `domainNotices`<sup>Required</sup> <a name="domainNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNotices"></a>

```typescript
public readonly domainNotices: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddomainsRegistrationConfig <a name="ClouddomainsRegistrationConfig" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationConfig: clouddomainsRegistration.ClouddomainsRegistrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactSettings">contactSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainName">domainName</a></code> | <code>string</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.yearlyPrice">yearlyPrice</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactNotices">contactNotices</a></code> | <code>string[]</code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dnsSettings">dnsSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainNotices">domainNotices</a></code> | <code>string[]</code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.managementSettings">managementSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `contactSettings`<sup>Required</sup> <a name="contactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactSettings"></a>

```typescript
public readonly contactSettings: ClouddomainsRegistrationContactSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#contact_settings ClouddomainsRegistration#contact_settings}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#domain_name ClouddomainsRegistration#domain_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#location ClouddomainsRegistration#location}

---

##### `yearlyPrice`<sup>Required</sup> <a name="yearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.yearlyPrice"></a>

```typescript
public readonly yearlyPrice: ClouddomainsRegistrationYearlyPrice;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#yearly_price ClouddomainsRegistration#yearly_price}

---

##### `contactNotices`<sup>Optional</sup> <a name="contactNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactNotices"></a>

```typescript
public readonly contactNotices: string[];
```

- *Type:* string[]

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#contact_notices ClouddomainsRegistration#contact_notices}

---

##### `dnsSettings`<sup>Optional</sup> <a name="dnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dnsSettings"></a>

```typescript
public readonly dnsSettings: ClouddomainsRegistrationDnsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#dns_settings ClouddomainsRegistration#dns_settings}

---

##### `domainNotices`<sup>Optional</sup> <a name="domainNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainNotices"></a>

```typescript
public readonly domainNotices: string[];
```

- *Type:* string[]

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#domain_notices ClouddomainsRegistration#domain_notices}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#labels ClouddomainsRegistration#labels}

---

##### `managementSettings`<sup>Optional</sup> <a name="managementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.managementSettings"></a>

```typescript
public readonly managementSettings: ClouddomainsRegistrationManagementSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#management_settings ClouddomainsRegistration#management_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ClouddomainsRegistrationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#timeouts ClouddomainsRegistration#timeouts}

---

### ClouddomainsRegistrationContactSettings <a name="ClouddomainsRegistrationContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettings: clouddomainsRegistration.ClouddomainsRegistrationContactSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.privacy">privacy</a></code> | <code>string</code> | Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.technicalContact">technicalContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | technical_contact block. |

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.adminContact"></a>

```typescript
public readonly adminContact: ClouddomainsRegistrationContactSettingsAdminContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#admin_contact ClouddomainsRegistration#admin_contact}

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#privacy ClouddomainsRegistration#privacy}

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.registrantContact"></a>

```typescript
public readonly registrantContact: ClouddomainsRegistrationContactSettingsRegistrantContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#registrant_contact ClouddomainsRegistration#registrant_contact}

---

##### `technicalContact`<sup>Required</sup> <a name="technicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.technicalContact"></a>

```typescript
public readonly technicalContact: ClouddomainsRegistrationContactSettingsTechnicalContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#technical_contact ClouddomainsRegistration#technical_contact}

---

### ClouddomainsRegistrationContactSettingsAdminContact <a name="ClouddomainsRegistrationContactSettingsAdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettingsAdminContact: clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.email">email</a></code> | <code>string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber">faxNumber</a></code> | <code>string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress"></a>

```typescript
public readonly postalAddress: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsAdminContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsAdminContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettingsAdminContactPostalAddress: clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode">regionCode</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines">addressLines</a></code> | <code>string[]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea">administrativeArea</a></code> | <code>string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality">locality</a></code> | <code>string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization">organization</a></code> | <code>string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients">recipients</a></code> | <code>string[]</code> | The recipient at the address. |

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode"></a>

```typescript
public readonly regionCode: string;
```

- *Type:* string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `addressLines`<sup>Optional</sup> <a name="addressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines"></a>

```typescript
public readonly addressLines: string[];
```

- *Type:* string[]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `administrativeArea`<sup>Optional</sup> <a name="administrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea"></a>

```typescript
public readonly administrativeArea: string;
```

- *Type:* string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationContactSettingsRegistrantContact <a name="ClouddomainsRegistrationContactSettingsRegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettingsRegistrantContact: clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.email">email</a></code> | <code>string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber">faxNumber</a></code> | <code>string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress"></a>

```typescript
public readonly postalAddress: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettingsRegistrantContactPostalAddress: clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode">regionCode</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines">addressLines</a></code> | <code>string[]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea">administrativeArea</a></code> | <code>string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality">locality</a></code> | <code>string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization">organization</a></code> | <code>string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients">recipients</a></code> | <code>string[]</code> | The recipient at the address. |

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode"></a>

```typescript
public readonly regionCode: string;
```

- *Type:* string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `addressLines`<sup>Optional</sup> <a name="addressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines"></a>

```typescript
public readonly addressLines: string[];
```

- *Type:* string[]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `administrativeArea`<sup>Optional</sup> <a name="administrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea"></a>

```typescript
public readonly administrativeArea: string;
```

- *Type:* string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationContactSettingsTechnicalContact <a name="ClouddomainsRegistrationContactSettingsTechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettingsTechnicalContact: clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.email">email</a></code> | <code>string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber">faxNumber</a></code> | <code>string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress"></a>

```typescript
public readonly postalAddress: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `faxNumber`<sup>Optional</sup> <a name="faxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationContactSettingsTechnicalContactPostalAddress: clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode">regionCode</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines">addressLines</a></code> | <code>string[]</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea">administrativeArea</a></code> | <code>string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality">locality</a></code> | <code>string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization">organization</a></code> | <code>string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode">postalCode</a></code> | <code>string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients">recipients</a></code> | <code>string[]</code> | The recipient at the address. |

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode"></a>

```typescript
public readonly regionCode: string;
```

- *Type:* string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `addressLines`<sup>Optional</sup> <a name="addressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines"></a>

```typescript
public readonly addressLines: string[];
```

- *Type:* string[]

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `administrativeArea`<sup>Optional</sup> <a name="administrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea"></a>

```typescript
public readonly administrativeArea: string;
```

- *Type:* string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `recipients`<sup>Optional</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationDnsSettings <a name="ClouddomainsRegistrationDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationDnsSettings: clouddomainsRegistration.ClouddomainsRegistrationDnsSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.customDns">customDns</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | custom_dns block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.glueRecords">glueRecords</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]</code> | glue_records block. |

---

##### `customDns`<sup>Optional</sup> <a name="customDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.customDns"></a>

```typescript
public readonly customDns: ClouddomainsRegistrationDnsSettingsCustomDns;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#custom_dns ClouddomainsRegistration#custom_dns}

---

##### `glueRecords`<sup>Optional</sup> <a name="glueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.glueRecords"></a>

```typescript
public readonly glueRecords: IResolvable | ClouddomainsRegistrationDnsSettingsGlueRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#glue_records ClouddomainsRegistration#glue_records}

---

### ClouddomainsRegistrationDnsSettingsCustomDns <a name="ClouddomainsRegistrationDnsSettingsCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationDnsSettingsCustomDns: clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers">nameServers</a></code> | <code>string[]</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords">dsRecords</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]</code> | ds_records block. |

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers"></a>

```typescript
public readonly nameServers: string[];
```

- *Type:* string[]

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#name_servers ClouddomainsRegistration#name_servers}

---

##### `dsRecords`<sup>Optional</sup> <a name="dsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords"></a>

```typescript
public readonly dsRecords: IResolvable | ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#ds_records ClouddomainsRegistration#ds_records}

---

### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationDnsSettingsCustomDnsDsRecords: clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm">algorithm</a></code> | <code>string</code> | The algorithm used to generate the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest">digest</a></code> | <code>string</code> | The digest generated from the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType">digestType</a></code> | <code>string</code> | The hash function used to generate the digest of the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag">keyTag</a></code> | <code>number</code> | The key tag of the record. Must be set in range 0 -- 65535. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The algorithm used to generate the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#algorithm ClouddomainsRegistration#algorithm}

---

##### `digest`<sup>Optional</sup> <a name="digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

The digest generated from the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#digest ClouddomainsRegistration#digest}

---

##### `digestType`<sup>Optional</sup> <a name="digestType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType"></a>

```typescript
public readonly digestType: string;
```

- *Type:* string

The hash function used to generate the digest of the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#digest_type ClouddomainsRegistration#digest_type}

---

##### `keyTag`<sup>Optional</sup> <a name="keyTag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

The key tag of the record. Must be set in range 0 -- 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#key_tag ClouddomainsRegistration#key_tag}

---

### ClouddomainsRegistrationDnsSettingsGlueRecords <a name="ClouddomainsRegistrationDnsSettingsGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationDnsSettingsGlueRecords: clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName">hostName</a></code> | <code>string</code> | Required. Domain name of the host in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

Required. Domain name of the host in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#host_name ClouddomainsRegistration#host_name}

---

##### `ipv4Addresses`<sup>Optional</sup> <a name="ipv4Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#ipv4_addresses ClouddomainsRegistration#ipv4_addresses}

---

##### `ipv6Addresses`<sup>Optional</sup> <a name="ipv6Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#ipv6_addresses ClouddomainsRegistration#ipv6_addresses}

---

### ClouddomainsRegistrationManagementSettings <a name="ClouddomainsRegistrationManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationManagementSettings: clouddomainsRegistration.ClouddomainsRegistrationManagementSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod">preferredRenewalMethod</a></code> | <code>string</code> | The desired renewal method for this Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.transferLockState">transferLockState</a></code> | <code>string</code> | Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED. |

---

##### `preferredRenewalMethod`<sup>Optional</sup> <a name="preferredRenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod"></a>

```typescript
public readonly preferredRenewalMethod: string;
```

- *Type:* string

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#preferred_renewal_method ClouddomainsRegistration#preferred_renewal_method}

---

##### `transferLockState`<sup>Optional</sup> <a name="transferLockState" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.transferLockState"></a>

```typescript
public readonly transferLockState: string;
```

- *Type:* string

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#transfer_lock_state ClouddomainsRegistration#transfer_lock_state}

---

### ClouddomainsRegistrationTimeouts <a name="ClouddomainsRegistrationTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationTimeouts: clouddomainsRegistration.ClouddomainsRegistrationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}.

---

### ClouddomainsRegistrationYearlyPrice <a name="ClouddomainsRegistrationYearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

const clouddomainsRegistrationYearlyPrice: clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.currencyCode">currencyCode</a></code> | <code>string</code> | The three-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.units">units</a></code> | <code>string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `currencyCode`<sup>Optional</sup> <a name="currencyCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#currency_code ClouddomainsRegistration#currency_code}

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/clouddomains_registration#units ClouddomainsRegistration#units}

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddomainsRegistrationContactSettingsAdminContactOutputReference <a name="ClouddomainsRegistrationContactSettingsAdminContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress">putPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostalAddress` <a name="putPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress"></a>

```typescript
public putPostalAddress(value: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber"></a>

```typescript
public resetFaxNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput">faxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput">postalAddressInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber">faxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress"></a>

```typescript
public readonly postalAddress: ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput"></a>

```typescript
public readonly faxNumberInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput"></a>

```typescript
public readonly postalAddressInput: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettingsAdminContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---


### ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines">resetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea">resetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLines` <a name="resetAddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines"></a>

```typescript
public resetAddressLines(): void
```

##### `resetAdministrativeArea` <a name="resetAdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```typescript
public resetAdministrativeArea(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients"></a>

```typescript
public resetRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput">addressLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput">administrativeAreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput">regionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines">addressLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea">administrativeArea</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode">regionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLinesInput`<sup>Optional</sup> <a name="addressLinesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput"></a>

```typescript
public readonly addressLinesInput: string[];
```

- *Type:* string[]

---

##### `administrativeAreaInput`<sup>Optional</sup> <a name="administrativeAreaInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```typescript
public readonly administrativeAreaInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string[];
```

- *Type:* string[]

---

##### `regionCodeInput`<sup>Optional</sup> <a name="regionCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput"></a>

```typescript
public readonly regionCodeInput: string;
```

- *Type:* string

---

##### `addressLines`<sup>Required</sup> <a name="addressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines"></a>

```typescript
public readonly addressLines: string[];
```

- *Type:* string[]

---

##### `administrativeArea`<sup>Required</sup> <a name="administrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea"></a>

```typescript
public readonly administrativeArea: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode"></a>

```typescript
public readonly regionCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettingsAdminContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---


### ClouddomainsRegistrationContactSettingsOutputReference <a name="ClouddomainsRegistrationContactSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact">putAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact">putRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact">putTechnicalContact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdminContact` <a name="putAdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact"></a>

```typescript
public putAdminContact(value: ClouddomainsRegistrationContactSettingsAdminContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `putRegistrantContact` <a name="putRegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact"></a>

```typescript
public putRegistrantContact(value: ClouddomainsRegistrationContactSettingsRegistrantContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `putTechnicalContact` <a name="putTechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact"></a>

```typescript
public putTechnicalContact(value: ClouddomainsRegistrationContactSettingsTechnicalContact): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContact">adminContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference">ClouddomainsRegistrationContactSettingsAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact">registrantContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact">technicalContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput">adminContactInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput">privacyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput">registrantContactInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput">technicalContactInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacy">privacy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminContact`<sup>Required</sup> <a name="adminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContact"></a>

```typescript
public readonly adminContact: ClouddomainsRegistrationContactSettingsAdminContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference">ClouddomainsRegistrationContactSettingsAdminContactOutputReference</a>

---

##### `registrantContact`<sup>Required</sup> <a name="registrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact"></a>

```typescript
public readonly registrantContact: ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a>

---

##### `technicalContact`<sup>Required</sup> <a name="technicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact"></a>

```typescript
public readonly technicalContact: ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a>

---

##### `adminContactInput`<sup>Optional</sup> <a name="adminContactInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput"></a>

```typescript
public readonly adminContactInput: ClouddomainsRegistrationContactSettingsAdminContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput"></a>

```typescript
public readonly privacyInput: string;
```

- *Type:* string

---

##### `registrantContactInput`<sup>Optional</sup> <a name="registrantContactInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput"></a>

```typescript
public readonly registrantContactInput: ClouddomainsRegistrationContactSettingsRegistrantContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `technicalContactInput`<sup>Optional</sup> <a name="technicalContactInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput"></a>

```typescript
public readonly technicalContactInput: ClouddomainsRegistrationContactSettingsTechnicalContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacy"></a>

```typescript
public readonly privacy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---


### ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference <a name="ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress">putPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostalAddress` <a name="putPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress"></a>

```typescript
public putPostalAddress(value: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber"></a>

```typescript
public resetFaxNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput">faxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput">postalAddressInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber">faxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress"></a>

```typescript
public readonly postalAddress: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput"></a>

```typescript
public readonly faxNumberInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput"></a>

```typescript
public readonly postalAddressInput: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettingsRegistrantContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---


### ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines">resetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea">resetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLines` <a name="resetAddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines"></a>

```typescript
public resetAddressLines(): void
```

##### `resetAdministrativeArea` <a name="resetAdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```typescript
public resetAdministrativeArea(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients"></a>

```typescript
public resetRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput">addressLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput">administrativeAreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput">regionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines">addressLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea">administrativeArea</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode">regionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLinesInput`<sup>Optional</sup> <a name="addressLinesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput"></a>

```typescript
public readonly addressLinesInput: string[];
```

- *Type:* string[]

---

##### `administrativeAreaInput`<sup>Optional</sup> <a name="administrativeAreaInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```typescript
public readonly administrativeAreaInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string[];
```

- *Type:* string[]

---

##### `regionCodeInput`<sup>Optional</sup> <a name="regionCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput"></a>

```typescript
public readonly regionCodeInput: string;
```

- *Type:* string

---

##### `addressLines`<sup>Required</sup> <a name="addressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines"></a>

```typescript
public readonly addressLines: string[];
```

- *Type:* string[]

---

##### `administrativeArea`<sup>Required</sup> <a name="administrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea"></a>

```typescript
public readonly administrativeArea: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode"></a>

```typescript
public readonly regionCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---


### ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference <a name="ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress">putPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber">resetFaxNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPostalAddress` <a name="putPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress"></a>

```typescript
public putPostalAddress(value: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `resetFaxNumber` <a name="resetFaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber"></a>

```typescript
public resetFaxNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress">postalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput">faxNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput">postalAddressInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber">faxNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `postalAddress`<sup>Required</sup> <a name="postalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress"></a>

```typescript
public readonly postalAddress: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `faxNumberInput`<sup>Optional</sup> <a name="faxNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput"></a>

```typescript
public readonly faxNumberInput: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `postalAddressInput`<sup>Optional</sup> <a name="postalAddressInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput"></a>

```typescript
public readonly postalAddressInput: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `faxNumber`<sup>Required</sup> <a name="faxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber"></a>

```typescript
public readonly faxNumber: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettingsTechnicalContact;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


### ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines">resetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea">resetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients">resetRecipients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddressLines` <a name="resetAddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines"></a>

```typescript
public resetAddressLines(): void
```

##### `resetAdministrativeArea` <a name="resetAdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```typescript
public resetAdministrativeArea(): void
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality"></a>

```typescript
public resetLocality(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode"></a>

```typescript
public resetPostalCode(): void
```

##### `resetRecipients` <a name="resetRecipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients"></a>

```typescript
public resetRecipients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput">addressLinesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput">administrativeAreaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput">localityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput">recipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput">regionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines">addressLines</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea">administrativeArea</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality">locality</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode">postalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients">recipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode">regionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressLinesInput`<sup>Optional</sup> <a name="addressLinesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput"></a>

```typescript
public readonly addressLinesInput: string[];
```

- *Type:* string[]

---

##### `administrativeAreaInput`<sup>Optional</sup> <a name="administrativeAreaInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```typescript
public readonly administrativeAreaInput: string;
```

- *Type:* string

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput"></a>

```typescript
public readonly localityInput: string;
```

- *Type:* string

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput"></a>

```typescript
public readonly postalCodeInput: string;
```

- *Type:* string

---

##### `recipientsInput`<sup>Optional</sup> <a name="recipientsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput"></a>

```typescript
public readonly recipientsInput: string[];
```

- *Type:* string[]

---

##### `regionCodeInput`<sup>Optional</sup> <a name="regionCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput"></a>

```typescript
public readonly regionCodeInput: string;
```

- *Type:* string

---

##### `addressLines`<sup>Required</sup> <a name="addressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines"></a>

```typescript
public readonly addressLines: string[];
```

- *Type:* string[]

---

##### `administrativeArea`<sup>Required</sup> <a name="administrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea"></a>

```typescript
public readonly administrativeArea: string;
```

- *Type:* string

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality"></a>

```typescript
public readonly locality: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode"></a>

```typescript
public readonly postalCode: string;
```

- *Type:* string

---

##### `recipients`<sup>Required</sup> <a name="recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients"></a>

```typescript
public readonly recipients: string[];
```

- *Type:* string[]

---

##### `regionCode`<sup>Required</sup> <a name="regionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode"></a>

```typescript
public readonly regionCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---


### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get"></a>

```typescript
public get(index: number): ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]

---


### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest">resetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType">resetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag">resetKeyTag</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetDigest` <a name="resetDigest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest"></a>

```typescript
public resetDigest(): void
```

##### `resetDigestType` <a name="resetDigestType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType"></a>

```typescript
public resetDigestType(): void
```

##### `resetKeyTag` <a name="resetKeyTag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag"></a>

```typescript
public resetKeyTag(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput">digestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput">digestTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput">keyTagInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest">digest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType">digestType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag">keyTag</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `digestInput`<sup>Optional</sup> <a name="digestInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput"></a>

```typescript
public readonly digestInput: string;
```

- *Type:* string

---

##### `digestTypeInput`<sup>Optional</sup> <a name="digestTypeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput"></a>

```typescript
public readonly digestTypeInput: string;
```

- *Type:* string

---

##### `keyTagInput`<sup>Optional</sup> <a name="keyTagInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput"></a>

```typescript
public readonly keyTagInput: number;
```

- *Type:* number

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `digest`<sup>Required</sup> <a name="digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest"></a>

```typescript
public readonly digest: string;
```

- *Type:* string

---

##### `digestType`<sup>Required</sup> <a name="digestType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType"></a>

```typescript
public readonly digestType: string;
```

- *Type:* string

---

##### `keyTag`<sup>Required</sup> <a name="keyTag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag"></a>

```typescript
public readonly keyTag: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>

---


### ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference <a name="ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords">putDsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords">resetDsRecords</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDsRecords` <a name="putDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords"></a>

```typescript
public putDsRecords(value: IResolvable | ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]

---

##### `resetDsRecords` <a name="resetDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords"></a>

```typescript
public resetDsRecords(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords">dsRecords</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput">dsRecordsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput">nameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers">nameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dsRecords`<sup>Required</sup> <a name="dsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords"></a>

```typescript
public readonly dsRecords: ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a>

---

##### `dsRecordsInput`<sup>Optional</sup> <a name="dsRecordsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput"></a>

```typescript
public readonly dsRecordsInput: IResolvable | ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords</a>[]

---

##### `nameServersInput`<sup>Optional</sup> <a name="nameServersInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput"></a>

```typescript
public readonly nameServersInput: string[];
```

- *Type:* string[]

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers"></a>

```typescript
public readonly nameServers: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationDnsSettingsCustomDns;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---


### ClouddomainsRegistrationDnsSettingsGlueRecordsList <a name="ClouddomainsRegistrationDnsSettingsGlueRecordsList" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get"></a>

```typescript
public get(index: number): ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddomainsRegistrationDnsSettingsGlueRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]

---


### ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference <a name="ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses">resetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses">resetIpv6Addresses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpv4Addresses` <a name="resetIpv4Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses"></a>

```typescript
public resetIpv4Addresses(): void
```

##### `resetIpv6Addresses` <a name="resetIpv6Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses"></a>

```typescript
public resetIpv6Addresses(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput">hostNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput">ipv4AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput">ipv6AddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName">hostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses">ipv6Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostNameInput`<sup>Optional</sup> <a name="hostNameInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput"></a>

```typescript
public readonly hostNameInput: string;
```

- *Type:* string

---

##### `ipv4AddressesInput`<sup>Optional</sup> <a name="ipv4AddressesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput"></a>

```typescript
public readonly ipv4AddressesInput: string[];
```

- *Type:* string[]

---

##### `ipv6AddressesInput`<sup>Optional</sup> <a name="ipv6AddressesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput"></a>

```typescript
public readonly ipv6AddressesInput: string[];
```

- *Type:* string[]

---

##### `hostName`<sup>Required</sup> <a name="hostName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName"></a>

```typescript
public readonly hostName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `ipv6Addresses`<sup>Required</sup> <a name="ipv6Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses"></a>

```typescript
public readonly ipv6Addresses: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddomainsRegistrationDnsSettingsGlueRecords;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>

---


### ClouddomainsRegistrationDnsSettingsOutputReference <a name="ClouddomainsRegistrationDnsSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns">putCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords">putGlueRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns">resetCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords">resetGlueRecords</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomDns` <a name="putCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns"></a>

```typescript
public putCustomDns(value: ClouddomainsRegistrationDnsSettingsCustomDns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `putGlueRecords` <a name="putGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords"></a>

```typescript
public putGlueRecords(value: IResolvable | ClouddomainsRegistrationDnsSettingsGlueRecords[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]

---

##### `resetCustomDns` <a name="resetCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns"></a>

```typescript
public resetCustomDns(): void
```

##### `resetGlueRecords` <a name="resetGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords"></a>

```typescript
public resetGlueRecords(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDns">customDns</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords">glueRecords</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList">ClouddomainsRegistrationDnsSettingsGlueRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput">customDnsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput">glueRecordsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customDns`<sup>Required</sup> <a name="customDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDns"></a>

```typescript
public readonly customDns: ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a>

---

##### `glueRecords`<sup>Required</sup> <a name="glueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords"></a>

```typescript
public readonly glueRecords: ClouddomainsRegistrationDnsSettingsGlueRecordsList;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList">ClouddomainsRegistrationDnsSettingsGlueRecordsList</a>

---

##### `customDnsInput`<sup>Optional</sup> <a name="customDnsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput"></a>

```typescript
public readonly customDnsInput: ClouddomainsRegistrationDnsSettingsCustomDns;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `glueRecordsInput`<sup>Optional</sup> <a name="glueRecordsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput"></a>

```typescript
public readonly glueRecordsInput: IResolvable | ClouddomainsRegistrationDnsSettingsGlueRecords[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords">ClouddomainsRegistrationDnsSettingsGlueRecords</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationDnsSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---


### ClouddomainsRegistrationManagementSettingsOutputReference <a name="ClouddomainsRegistrationManagementSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod">resetPreferredRenewalMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState">resetTransferLockState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPreferredRenewalMethod` <a name="resetPreferredRenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod"></a>

```typescript
public resetPreferredRenewalMethod(): void
```

##### `resetTransferLockState` <a name="resetTransferLockState" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState"></a>

```typescript
public resetTransferLockState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod">renewalMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput">preferredRenewalMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput">transferLockStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod">preferredRenewalMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState">transferLockState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `renewalMethod`<sup>Required</sup> <a name="renewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod"></a>

```typescript
public readonly renewalMethod: string;
```

- *Type:* string

---

##### `preferredRenewalMethodInput`<sup>Optional</sup> <a name="preferredRenewalMethodInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput"></a>

```typescript
public readonly preferredRenewalMethodInput: string;
```

- *Type:* string

---

##### `transferLockStateInput`<sup>Optional</sup> <a name="transferLockStateInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput"></a>

```typescript
public readonly transferLockStateInput: string;
```

- *Type:* string

---

##### `preferredRenewalMethod`<sup>Required</sup> <a name="preferredRenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod"></a>

```typescript
public readonly preferredRenewalMethod: string;
```

- *Type:* string

---

##### `transferLockState`<sup>Required</sup> <a name="transferLockState" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState"></a>

```typescript
public readonly transferLockState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationManagementSettings;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---


### ClouddomainsRegistrationTimeoutsOutputReference <a name="ClouddomainsRegistrationTimeoutsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ClouddomainsRegistrationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

---


### ClouddomainsRegistrationYearlyPriceOutputReference <a name="ClouddomainsRegistrationYearlyPriceOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer"></a>

```typescript
import { clouddomainsRegistration } from '@cdktf/provider-google'

new clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode">resetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetUnits">resetUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrencyCode` <a name="resetCurrencyCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode"></a>

```typescript
public resetCurrencyCode(): void
```

##### `resetUnits` <a name="resetUnits" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetUnits"></a>

```typescript
public resetUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput">currencyCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput">unitsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode">currencyCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.units">units</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currencyCodeInput`<sup>Optional</sup> <a name="currencyCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput"></a>

```typescript
public readonly currencyCodeInput: string;
```

- *Type:* string

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput"></a>

```typescript
public readonly unitsInput: string;
```

- *Type:* string

---

##### `currencyCode`<sup>Required</sup> <a name="currencyCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode"></a>

```typescript
public readonly currencyCode: string;
```

- *Type:* string

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.units"></a>

```typescript
public readonly units: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ClouddomainsRegistrationYearlyPrice;
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---



