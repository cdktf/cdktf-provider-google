# `firebaseAppCheckPlayIntegrityConfig` Submodule <a name="`firebaseAppCheckPlayIntegrityConfig` Submodule" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppCheckPlayIntegrityConfig <a name="FirebaseAppCheckPlayIntegrityConfig" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config google_firebase_app_check_play_integrity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

new firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig(scope: Construct, id: string, config: FirebaseAppCheckPlayIntegrityConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig">FirebaseAppCheckPlayIntegrityConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig">FirebaseAppCheckPlayIntegrityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTokenTtl">resetTokenTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: FirebaseAppCheckPlayIntegrityConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTokenTtl` <a name="resetTokenTtl" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.resetTokenTtl"></a>

```typescript
public resetTokenTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppCheckPlayIntegrityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirebaseAppCheckPlayIntegrityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppCheckPlayIntegrityConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppCheckPlayIntegrityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppCheckPlayIntegrityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appIdInput">appIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput">tokenTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference">FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference</a>

---

##### `appIdInput`<sup>Optional</sup> <a name="appIdInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appIdInput"></a>

```typescript
public readonly appIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirebaseAppCheckPlayIntegrityConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---

##### `tokenTtlInput`<sup>Optional</sup> <a name="tokenTtlInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtlInput"></a>

```typescript
public readonly tokenTtlInput: string;
```

- *Type:* string

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tokenTtl`<sup>Required</sup> <a name="tokenTtl" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppCheckPlayIntegrityConfigConfig <a name="FirebaseAppCheckPlayIntegrityConfigConfig" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.Initializer"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

const firebaseAppCheckPlayIntegrityConfigConfig: firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.appId">appId</a></code> | <code>string</code> | The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id). |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#id FirebaseAppCheckPlayIntegrityConfig#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#project FirebaseAppCheckPlayIntegrityConfig#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl">tokenTtl</a></code> | <code>string</code> | Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

The ID of an [Android App](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects.androidApps#AndroidApp.FIELDS.app_id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#app_id FirebaseAppCheckPlayIntegrityConfig#app_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#id FirebaseAppCheckPlayIntegrityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#project FirebaseAppCheckPlayIntegrityConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppCheckPlayIntegrityConfigTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#timeouts FirebaseAppCheckPlayIntegrityConfig#timeouts}

---

##### `tokenTtl`<sup>Optional</sup> <a name="tokenTtl" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigConfig.property.tokenTtl"></a>

```typescript
public readonly tokenTtl: string;
```

- *Type:* string

Specifies the duration for which App Check tokens exchanged from Play Integrity artifacts will be valid.

If unset, a default value of 1 hour is assumed. Must be between 30 minutes and 7 days, inclusive.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#token_ttl FirebaseAppCheckPlayIntegrityConfig#token_ttl}

---

### FirebaseAppCheckPlayIntegrityConfigTimeouts <a name="FirebaseAppCheckPlayIntegrityConfigTimeouts" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.Initializer"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

const firebaseAppCheckPlayIntegrityConfigTimeouts: firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#create FirebaseAppCheckPlayIntegrityConfig#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#delete FirebaseAppCheckPlayIntegrityConfig#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#update FirebaseAppCheckPlayIntegrityConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#create FirebaseAppCheckPlayIntegrityConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#delete FirebaseAppCheckPlayIntegrityConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/firebase_app_check_play_integrity_config#update FirebaseAppCheckPlayIntegrityConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference <a name="FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { firebaseAppCheckPlayIntegrityConfig } from '@cdktf/provider-google'

new firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppCheckPlayIntegrityConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppCheckPlayIntegrityConfig.FirebaseAppCheckPlayIntegrityConfigTimeouts">FirebaseAppCheckPlayIntegrityConfigTimeouts</a>

---



