# `identityPlatformTenant` Submodule <a name="`identityPlatformTenant` Submodule" id="@cdktf/provider-google.identityPlatformTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenant <a name="IdentityPlatformTenant" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant google_identity_platform_tenant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

new identityPlatformTenant.IdentityPlatformTenant(scope: Construct, id: string, config: IdentityPlatformTenantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig">IdentityPlatformTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig">IdentityPlatformTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putClient">putClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetAllowPasswordSignup">resetAllowPasswordSignup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetClient">resetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetDisableAuth">resetDisableAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetEnableEmailLinkSignin">resetEnableEmailLinkSignin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClient` <a name="putClient" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putClient"></a>

```typescript
public putClient(value: IdentityPlatformTenantClient): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityPlatformTenantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

---

##### `resetAllowPasswordSignup` <a name="resetAllowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetAllowPasswordSignup"></a>

```typescript
public resetAllowPasswordSignup(): void
```

##### `resetClient` <a name="resetClient" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetClient"></a>

```typescript
public resetClient(): void
```

##### `resetDisableAuth` <a name="resetDisableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetDisableAuth"></a>

```typescript
public resetDisableAuth(): void
```

##### `resetEnableEmailLinkSignin` <a name="resetEnableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetEnableEmailLinkSignin"></a>

```typescript
public resetEnableEmailLinkSignin(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformTenant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isConstruct"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

identityPlatformTenant.IdentityPlatformTenant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformElement"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

identityPlatformTenant.IdentityPlatformTenant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformResource"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

identityPlatformTenant.IdentityPlatformTenant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityPlatformTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.client">client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference">IdentityPlatformTenantClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference">IdentityPlatformTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignupInput">allowPasswordSignupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.clientInput">clientInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuthInput">disableAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSigninInput">enableEmailLinkSigninInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignup">allowPasswordSignup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuth">disableAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `client`<sup>Required</sup> <a name="client" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.client"></a>

```typescript
public readonly client: IdentityPlatformTenantClientOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference">IdentityPlatformTenantClientOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformTenantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference">IdentityPlatformTenantTimeoutsOutputReference</a>

---

##### `allowPasswordSignupInput`<sup>Optional</sup> <a name="allowPasswordSignupInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignupInput"></a>

```typescript
public readonly allowPasswordSignupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientInput`<sup>Optional</sup> <a name="clientInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.clientInput"></a>

```typescript
public readonly clientInput: IdentityPlatformTenantClient;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a>

---

##### `disableAuthInput`<sup>Optional</sup> <a name="disableAuthInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuthInput"></a>

```typescript
public readonly disableAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableEmailLinkSigninInput`<sup>Optional</sup> <a name="enableEmailLinkSigninInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSigninInput"></a>

```typescript
public readonly enableEmailLinkSigninInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityPlatformTenantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

---

##### `allowPasswordSignup`<sup>Required</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.allowPasswordSignup"></a>

```typescript
public readonly allowPasswordSignup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableAuth`<sup>Required</sup> <a name="disableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.disableAuth"></a>

```typescript
public readonly disableAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableEmailLinkSignin`<sup>Required</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.enableEmailLinkSignin"></a>

```typescript
public readonly enableEmailLinkSignin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantClient <a name="IdentityPlatformTenantClient" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

const identityPlatformTenantClient: identityPlatformTenant.IdentityPlatformTenantClient = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a></code> | permissions block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient.property.permissions"></a>

```typescript
public readonly permissions: IdentityPlatformTenantClientPermissions;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#permissions IdentityPlatformTenant#permissions}

---

### IdentityPlatformTenantClientPermissions <a name="IdentityPlatformTenantClientPermissions" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

const identityPlatformTenantClientPermissions: identityPlatformTenant.IdentityPlatformTenantClientPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions.property.disabledUserDeletion">disabledUserDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, end users cannot delete their account on the associated project through any of our API methods. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions.property.disabledUserSignup">disabledUserSignup</a></code> | <code>boolean \| cdktf.IResolvable</code> | When true, end users cannot sign up for a new account on the associated project through any of our API methods. |

---

##### `disabledUserDeletion`<sup>Optional</sup> <a name="disabledUserDeletion" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions.property.disabledUserDeletion"></a>

```typescript
public readonly disabledUserDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, end users cannot delete their account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#disabled_user_deletion IdentityPlatformTenant#disabled_user_deletion}

---

##### `disabledUserSignup`<sup>Optional</sup> <a name="disabledUserSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions.property.disabledUserSignup"></a>

```typescript
public readonly disabledUserSignup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When true, end users cannot sign up for a new account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#disabled_user_signup IdentityPlatformTenant#disabled_user_signup}

---

### IdentityPlatformTenantConfig <a name="IdentityPlatformTenantConfig" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

const identityPlatformTenantConfig: identityPlatformTenant.IdentityPlatformTenantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.displayName">displayName</a></code> | <code>string</code> | Human friendly display name of the tenant. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.allowPasswordSignup">allowPasswordSignup</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow email/password user authentication. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.client">client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.disableAuth">disableAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether authentication is disabled for the tenant. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.enableEmailLinkSignin">enableEmailLinkSignin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to enable email link user authentication. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#id IdentityPlatformTenant#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#project IdentityPlatformTenant#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human friendly display name of the tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#display_name IdentityPlatformTenant#display_name}

---

##### `allowPasswordSignup`<sup>Optional</sup> <a name="allowPasswordSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.allowPasswordSignup"></a>

```typescript
public readonly allowPasswordSignup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow email/password user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#allow_password_signup IdentityPlatformTenant#allow_password_signup}

---

##### `client`<sup>Optional</sup> <a name="client" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.client"></a>

```typescript
public readonly client: IdentityPlatformTenantClient;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#client IdentityPlatformTenant#client}

---

##### `disableAuth`<sup>Optional</sup> <a name="disableAuth" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.disableAuth"></a>

```typescript
public readonly disableAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether authentication is disabled for the tenant.

If true, the users under
the disabled tenant are not allowed to sign-in. Admins of the disabled tenant
are not able to manage its users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#disable_auth IdentityPlatformTenant#disable_auth}

---

##### `enableEmailLinkSignin`<sup>Optional</sup> <a name="enableEmailLinkSignin" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.enableEmailLinkSignin"></a>

```typescript
public readonly enableEmailLinkSignin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to enable email link user authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#enable_email_link_signin IdentityPlatformTenant#enable_email_link_signin}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#id IdentityPlatformTenant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#project IdentityPlatformTenant#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformTenantTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#timeouts IdentityPlatformTenant#timeouts}

---

### IdentityPlatformTenantTimeouts <a name="IdentityPlatformTenantTimeouts" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

const identityPlatformTenantTimeouts: identityPlatformTenant.IdentityPlatformTenantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#create IdentityPlatformTenant#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#delete IdentityPlatformTenant#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#update IdentityPlatformTenant#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#create IdentityPlatformTenant#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#delete IdentityPlatformTenant#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/identity_platform_tenant#update IdentityPlatformTenant#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantClientOutputReference <a name="IdentityPlatformTenantClientOutputReference" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

new identityPlatformTenant.IdentityPlatformTenantClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPermissions` <a name="putPermissions" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.putPermissions"></a>

```typescript
public putPermissions(value: IdentityPlatformTenantClientPermissions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a>

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.permissions">permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference">IdentityPlatformTenantClientPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.permissionsInput">permissionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.permissions"></a>

```typescript
public readonly permissions: IdentityPlatformTenantClientPermissionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference">IdentityPlatformTenantClientPermissionsOutputReference</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IdentityPlatformTenantClientPermissions;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformTenantClient;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClient">IdentityPlatformTenantClient</a>

---


### IdentityPlatformTenantClientPermissionsOutputReference <a name="IdentityPlatformTenantClientPermissionsOutputReference" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

new identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserDeletion">resetDisabledUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserSignup">resetDisabledUserSignup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabledUserDeletion` <a name="resetDisabledUserDeletion" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserDeletion"></a>

```typescript
public resetDisabledUserDeletion(): void
```

##### `resetDisabledUserSignup` <a name="resetDisabledUserSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.resetDisabledUserSignup"></a>

```typescript
public resetDisabledUserSignup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletionInput">disabledUserDeletionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignupInput">disabledUserSignupInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletion">disabledUserDeletion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignup">disabledUserSignup</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disabledUserDeletionInput`<sup>Optional</sup> <a name="disabledUserDeletionInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletionInput"></a>

```typescript
public readonly disabledUserDeletionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledUserSignupInput`<sup>Optional</sup> <a name="disabledUserSignupInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignupInput"></a>

```typescript
public readonly disabledUserSignupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledUserDeletion`<sup>Required</sup> <a name="disabledUserDeletion" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserDeletion"></a>

```typescript
public readonly disabledUserDeletion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disabledUserSignup`<sup>Required</sup> <a name="disabledUserSignup" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.disabledUserSignup"></a>

```typescript
public readonly disabledUserSignup: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformTenantClientPermissions;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantClientPermissions">IdentityPlatformTenantClientPermissions</a>

---


### IdentityPlatformTenantTimeoutsOutputReference <a name="IdentityPlatformTenantTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityPlatformTenant } from '@cdktf/provider-google'

new identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityPlatformTenantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.identityPlatformTenant.IdentityPlatformTenantTimeouts">IdentityPlatformTenantTimeouts</a>

---



