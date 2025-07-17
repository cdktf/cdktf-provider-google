# `identityPlatformDefaultSupportedIdpConfig` Submodule <a name="`identityPlatformDefaultSupportedIdpConfig` Submodule" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformDefaultSupportedIdpConfig <a name="IdentityPlatformDefaultSupportedIdpConfig" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config google_identity_platform_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

new identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig(scope: Construct, id: string, config: IdentityPlatformDefaultSupportedIdpConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig">IdentityPlatformDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig">IdentityPlatformDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityPlatformDefaultSupportedIdpConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityPlatformDefaultSupportedIdpConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformDefaultSupportedIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput">idpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpId">idpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpIdInput`<sup>Optional</sup> <a name="idpIdInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpIdInput"></a>

```typescript
public readonly idpIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityPlatformDefaultSupportedIdpConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformDefaultSupportedIdpConfigConfig <a name="IdentityPlatformDefaultSupportedIdpConfigConfig" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.Initializer"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

const identityPlatformDefaultSupportedIdpConfigConfig: identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId">idpId</a></code> | <code>string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#id IdentityPlatformDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#project IdentityPlatformDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#client_id IdentityPlatformDefaultSupportedIdpConfig#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#client_secret IdentityPlatformDefaultSupportedIdpConfig#client_secret}

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

ID of the IDP. Possible values include:.

* 'apple.com'

* 'facebook.com'

* 'gc.apple.com'

* 'github.com'

* 'google.com'

* 'linkedin.com'

* 'microsoft.com'

* 'playgames.google.com'

* 'twitter.com'

* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#idp_id IdentityPlatformDefaultSupportedIdpConfig#idp_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#enabled IdentityPlatformDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#id IdentityPlatformDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#project IdentityPlatformDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformDefaultSupportedIdpConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#timeouts IdentityPlatformDefaultSupportedIdpConfig#timeouts}

---

### IdentityPlatformDefaultSupportedIdpConfigTimeouts <a name="IdentityPlatformDefaultSupportedIdpConfigTimeouts" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

const identityPlatformDefaultSupportedIdpConfigTimeouts: identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#create IdentityPlatformDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#delete IdentityPlatformDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#update IdentityPlatformDefaultSupportedIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#create IdentityPlatformDefaultSupportedIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#delete IdentityPlatformDefaultSupportedIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/identity_platform_default_supported_idp_config#update IdentityPlatformDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference <a name="IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityPlatformDefaultSupportedIdpConfig } from '@cdktf/provider-google'

new identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityPlatformDefaultSupportedIdpConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.identityPlatformDefaultSupportedIdpConfig.IdentityPlatformDefaultSupportedIdpConfigTimeouts">IdentityPlatformDefaultSupportedIdpConfigTimeouts</a>

---



