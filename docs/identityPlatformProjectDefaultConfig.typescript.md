# `identityPlatformProjectDefaultConfig` Submodule <a name="`identityPlatformProjectDefaultConfig` Submodule" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformProjectDefaultConfig <a name="IdentityPlatformProjectDefaultConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config google_identity_platform_project_default_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig(scope: Construct, id: string, config?: IdentityPlatformProjectDefaultConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig">IdentityPlatformProjectDefaultConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig">IdentityPlatformProjectDefaultConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn">putSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn">resetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSignIn` <a name="putSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn"></a>

```typescript
public putSignIn(value: IdentityPlatformProjectDefaultConfigSignIn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityPlatformProjectDefaultConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSignIn` <a name="resetSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetSignIn"></a>

```typescript
public resetSignIn(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityPlatformProjectDefaultConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformProjectDefaultConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformProjectDefaultConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformProjectDefaultConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput">signInInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `signIn`<sup>Required</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signIn"></a>

```typescript
public readonly signIn: IdentityPlatformProjectDefaultConfigSignInOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference">IdentityPlatformProjectDefaultConfigSignInOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformProjectDefaultConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference">IdentityPlatformProjectDefaultConfigTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `signInInput`<sup>Optional</sup> <a name="signInInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.signInInput"></a>

```typescript
public readonly signInInput: IdentityPlatformProjectDefaultConfigSignIn;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityPlatformProjectDefaultConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformProjectDefaultConfigConfig <a name="IdentityPlatformProjectDefaultConfigConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigConfig: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn">signIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#id IdentityPlatformProjectDefaultConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#project IdentityPlatformProjectDefaultConfig#project}.

---

##### `signIn`<sup>Optional</sup> <a name="signIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.signIn"></a>

```typescript
public readonly signIn: IdentityPlatformProjectDefaultConfigSignIn;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#sign_in IdentityPlatformProjectDefaultConfig#sign_in}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformProjectDefaultConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#timeouts IdentityPlatformProjectDefaultConfig#timeouts}

---

### IdentityPlatformProjectDefaultConfigSignIn <a name="IdentityPlatformProjectDefaultConfigSignIn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigSignIn: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `allowDuplicateEmails`<sup>Optional</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.allowDuplicateEmails"></a>

```typescript
public readonly allowDuplicateEmails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#allow_duplicate_emails IdentityPlatformProjectDefaultConfig#allow_duplicate_emails}

---

##### `anonymous`<sup>Optional</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.anonymous"></a>

```typescript
public readonly anonymous: IdentityPlatformProjectDefaultConfigSignInAnonymous;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#anonymous IdentityPlatformProjectDefaultConfig#anonymous}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.email"></a>

```typescript
public readonly email: IdentityPlatformProjectDefaultConfigSignInEmail;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#email IdentityPlatformProjectDefaultConfig#email}

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: IdentityPlatformProjectDefaultConfigSignInPhoneNumber;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#phone_number IdentityPlatformProjectDefaultConfig#phone_number}

---

### IdentityPlatformProjectDefaultConfigSignInAnonymous <a name="IdentityPlatformProjectDefaultConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigSignInAnonymous: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

### IdentityPlatformProjectDefaultConfigSignInEmail <a name="IdentityPlatformProjectDefaultConfigSignInEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigSignInEmail: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired">passwordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether a password is required for email auth or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `passwordRequired`<sup>Optional</sup> <a name="passwordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail.property.passwordRequired"></a>

```typescript
public readonly passwordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#password_required IdentityPlatformProjectDefaultConfig#password_required}

---

### IdentityPlatformProjectDefaultConfigSignInHashConfig <a name="IdentityPlatformProjectDefaultConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigSignInHashConfig: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig = { ... }
```


### IdentityPlatformProjectDefaultConfigSignInPhoneNumber <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigSignInPhoneNumber: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>{[ key: string ]: string}</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#enabled IdentityPlatformProjectDefaultConfig#enabled}

---

##### `testPhoneNumbers`<sup>Optional</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```typescript
public readonly testPhoneNumbers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#test_phone_numbers IdentityPlatformProjectDefaultConfig#test_phone_numbers}

---

### IdentityPlatformProjectDefaultConfigTimeouts <a name="IdentityPlatformProjectDefaultConfigTimeouts" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

const identityPlatformProjectDefaultConfigTimeouts: identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#create IdentityPlatformProjectDefaultConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#delete IdentityPlatformProjectDefaultConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/identity_platform_project_default_config#update IdentityPlatformProjectDefaultConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformProjectDefaultConfigSignInAnonymous;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---


### IdentityPlatformProjectDefaultConfigSignInEmailOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired">resetPasswordRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPasswordRequired` <a name="resetPasswordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```typescript
public resetPasswordRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput">passwordRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired">passwordRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordRequiredInput`<sup>Optional</sup> <a name="passwordRequiredInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```typescript
public readonly passwordRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordRequired`<sup>Required</sup> <a name="passwordRequired" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.passwordRequired"></a>

```typescript
public readonly passwordRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformProjectDefaultConfigSignInEmail;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigList <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get"></a>

```typescript
public get(index: number): IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost">memoryCost</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds">rounds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator">saltSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey">signerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `memoryCost`<sup>Required</sup> <a name="memoryCost" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```typescript
public readonly memoryCost: number;
```

- *Type:* number

---

##### `rounds`<sup>Required</sup> <a name="rounds" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.rounds"></a>

```typescript
public readonly rounds: number;
```

- *Type:* number

---

##### `saltSeparator`<sup>Required</sup> <a name="saltSeparator" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```typescript
public readonly saltSeparator: string;
```

- *Type:* string

---

##### `signerKey`<sup>Required</sup> <a name="signerKey" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.signerKey"></a>

```typescript
public readonly signerKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformProjectDefaultConfigSignInHashConfig;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfig">IdentityPlatformProjectDefaultConfigSignInHashConfig</a>

---


### IdentityPlatformProjectDefaultConfigSignInOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous">putAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail">putEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber">putPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails">resetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous">resetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail">resetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnonymous` <a name="putAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous"></a>

```typescript
public putAnonymous(value: IdentityPlatformProjectDefaultConfigSignInAnonymous): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `putEmail` <a name="putEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail"></a>

```typescript
public putEmail(value: IdentityPlatformProjectDefaultConfigSignInEmail): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `putPhoneNumber` <a name="putPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber"></a>

```typescript
public putPhoneNumber(value: IdentityPlatformProjectDefaultConfigSignInPhoneNumber): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `resetAllowDuplicateEmails` <a name="resetAllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```typescript
public resetAllowDuplicateEmails(): void
```

##### `resetAnonymous` <a name="resetAnonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetAnonymous"></a>

```typescript
public resetAnonymous(): void
```

##### `resetEmail` <a name="resetEmail" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.resetPhoneNumber"></a>

```typescript
public resetPhoneNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous">anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email">email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig">hashConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber">phoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput">allowDuplicateEmailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput">anonymousInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput">emailInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails">allowDuplicateEmails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `anonymous`<sup>Required</sup> <a name="anonymous" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymous"></a>

```typescript
public readonly anonymous: IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference">IdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference</a>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.email"></a>

```typescript
public readonly email: IdentityPlatformProjectDefaultConfigSignInEmailOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmailOutputReference">IdentityPlatformProjectDefaultConfigSignInEmailOutputReference</a>

---

##### `hashConfig`<sup>Required</sup> <a name="hashConfig" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.hashConfig"></a>

```typescript
public readonly hashConfig: IdentityPlatformProjectDefaultConfigSignInHashConfigList;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInHashConfigList">IdentityPlatformProjectDefaultConfigSignInHashConfigList</a>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference">IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference</a>

---

##### `allowDuplicateEmailsInput`<sup>Optional</sup> <a name="allowDuplicateEmailsInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```typescript
public readonly allowDuplicateEmailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `anonymousInput`<sup>Optional</sup> <a name="anonymousInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.anonymousInput"></a>

```typescript
public readonly anonymousInput: IdentityPlatformProjectDefaultConfigSignInAnonymous;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInAnonymous">IdentityPlatformProjectDefaultConfigSignInAnonymous</a>

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: IdentityPlatformProjectDefaultConfigSignInEmail;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInEmail">IdentityPlatformProjectDefaultConfigSignInEmail</a>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: IdentityPlatformProjectDefaultConfigSignInPhoneNumber;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---

##### `allowDuplicateEmails`<sup>Required</sup> <a name="allowDuplicateEmails" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```typescript
public readonly allowDuplicateEmails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformProjectDefaultConfigSignIn;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignIn">IdentityPlatformProjectDefaultConfigSignIn</a>

---


### IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">resetTestPhoneNumbers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetTestPhoneNumbers` <a name="resetTestPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```typescript
public resetTestPhoneNumbers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">testPhoneNumbersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">testPhoneNumbers</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testPhoneNumbersInput`<sup>Optional</sup> <a name="testPhoneNumbersInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```typescript
public readonly testPhoneNumbersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `testPhoneNumbers`<sup>Required</sup> <a name="testPhoneNumbers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```typescript
public readonly testPhoneNumbers: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IdentityPlatformProjectDefaultConfigSignInPhoneNumber;
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigSignInPhoneNumber">IdentityPlatformProjectDefaultConfigSignInPhoneNumber</a>

---


### IdentityPlatformProjectDefaultConfigTimeoutsOutputReference <a name="IdentityPlatformProjectDefaultConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityPlatformProjectDefaultConfig } from '@cdktf/provider-google'

new identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityPlatformProjectDefaultConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.identityPlatformProjectDefaultConfig.IdentityPlatformProjectDefaultConfigTimeouts">IdentityPlatformProjectDefaultConfigTimeouts</a>

---



