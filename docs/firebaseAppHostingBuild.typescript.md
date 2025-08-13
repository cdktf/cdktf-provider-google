# `firebaseAppHostingBuild` Submodule <a name="`firebaseAppHostingBuild` Submodule" id="@cdktf/provider-google.firebaseAppHostingBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBuild <a name="FirebaseAppHostingBuild" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build google_firebase_app_hosting_build}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuild(scope: Construct, id: string, config: FirebaseAppHostingBuildConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig">FirebaseAppHostingBuildConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig">FirebaseAppHostingBuildConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource"></a>

```typescript
public putSource(value: FirebaseAppHostingBuildSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts"></a>

```typescript
public putTimeouts(value: FirebaseAppHostingBuildTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FirebaseAppHostingBuild resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FirebaseAppHostingBuild to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FirebaseAppHostingBuild that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBuild to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri">buildLogsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error">error</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource">errorSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput">backendInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput">buildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend">backend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId">buildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `buildLogsUri`<sup>Required</sup> <a name="buildLogsUri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri"></a>

```typescript
public readonly buildLogsUri: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error"></a>

```typescript
public readonly error: FirebaseAppHostingBuildErrorList;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a>

---

##### `errorSource`<sup>Required</sup> <a name="errorSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource"></a>

```typescript
public readonly errorSource: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source"></a>

```typescript
public readonly source: FirebaseAppHostingBuildSourceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppHostingBuildTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput"></a>

```typescript
public readonly backendInput: string;
```

- *Type:* string

---

##### `buildIdInput`<sup>Optional</sup> <a name="buildIdInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput"></a>

```typescript
public readonly buildIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput"></a>

```typescript
public readonly sourceInput: FirebaseAppHostingBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | FirebaseAppHostingBuildTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBuildConfig <a name="FirebaseAppHostingBuildConfig" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildConfig: firebaseAppHostingBuild.FirebaseAppHostingBuildConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend">backend</a></code> | <code>string</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId">buildId</a></code> | <code>string</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location">location</a></code> | <code>string</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source">source</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName">displayName</a></code> | <code>string</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend"></a>

```typescript
public readonly backend: string;
```

- *Type:* string

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#backend FirebaseAppHostingBuild#backend}

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId"></a>

```typescript
public readonly buildId: string;
```

- *Type:* string

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#build_id FirebaseAppHostingBuild#build_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#location FirebaseAppHostingBuild#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source"></a>

```typescript
public readonly source: FirebaseAppHostingBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#source FirebaseAppHostingBuild#source}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#annotations FirebaseAppHostingBuild#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#display_name FirebaseAppHostingBuild#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#labels FirebaseAppHostingBuild#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts"></a>

```typescript
public readonly timeouts: FirebaseAppHostingBuildTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#timeouts FirebaseAppHostingBuild#timeouts}

---

### FirebaseAppHostingBuildError <a name="FirebaseAppHostingBuildError" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildError: firebaseAppHostingBuild.FirebaseAppHostingBuildError = { ... }
```


### FirebaseAppHostingBuildSource <a name="FirebaseAppHostingBuildSource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildSource: firebaseAppHostingBuild.FirebaseAppHostingBuildSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | codebase block. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | container block. |

---

##### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase"></a>

```typescript
public readonly codebase: FirebaseAppHostingBuildSourceCodebase;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#codebase FirebaseAppHostingBuild#codebase}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container"></a>

```typescript
public readonly container: FirebaseAppHostingBuildSourceContainer;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#container FirebaseAppHostingBuild#container}

---

### FirebaseAppHostingBuildSourceCodebase <a name="FirebaseAppHostingBuildSourceCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildSourceCodebase: firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch">branch</a></code> | <code>string</code> | The branch in the codebase to build from, using the latest commit. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit">commit</a></code> | <code>string</code> | The commit in the codebase to build from. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#branch FirebaseAppHostingBuild#branch}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#commit FirebaseAppHostingBuild#commit}

---

### FirebaseAppHostingBuildSourceCodebaseAuthor <a name="FirebaseAppHostingBuildSourceCodebaseAuthor" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildSourceCodebaseAuthor: firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor = { ... }
```


### FirebaseAppHostingBuildSourceContainer <a name="FirebaseAppHostingBuildSourceContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildSourceContainer: firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image">image</a></code> | <code>string</code> | A URI representing a container for the backend to use. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#image FirebaseAppHostingBuild#image}

---

### FirebaseAppHostingBuildTimeouts <a name="FirebaseAppHostingBuildTimeouts" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

const firebaseAppHostingBuildTimeouts: firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBuildErrorList <a name="FirebaseAppHostingBuildErrorList" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingBuildErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FirebaseAppHostingBuildErrorOutputReference <a name="FirebaseAppHostingBuildErrorOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code">code</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details">details</a></code> | <code>cdktf.StringMapList</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code"></a>

```typescript
public readonly code: number;
```

- *Type:* number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details"></a>

```typescript
public readonly details: StringMapList;
```

- *Type:* cdktf.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingBuildError;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a>

---


### FirebaseAppHostingBuildSourceCodebaseAuthorList <a name="FirebaseAppHostingBuildSourceCodebaseAuthorList" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get"></a>

```typescript
public get(index: number): FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri">imageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri"></a>

```typescript
public readonly imageUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingBuildSourceCodebaseAuthor;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a>

---


### FirebaseAppHostingBuildSourceCodebaseOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit">resetCommit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch"></a>

```typescript
public resetBranch(): void
```

##### `resetCommit` <a name="resetCommit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit"></a>

```typescript
public resetCommit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author">author</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage">commitMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime">commitTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash">hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput">branchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput">commitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit">commit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author"></a>

```typescript
public readonly author: FirebaseAppHostingBuildSourceCodebaseAuthorList;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a>

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage"></a>

```typescript
public readonly commitMessage: string;
```

- *Type:* string

---

##### `commitTime`<sup>Required</sup> <a name="commitTime" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime"></a>

```typescript
public readonly commitTime: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash"></a>

```typescript
public readonly hash: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* string

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput"></a>

```typescript
public readonly commitInput: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit"></a>

```typescript
public readonly commit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingBuildSourceCodebase;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---


### FirebaseAppHostingBuildSourceContainerOutputReference <a name="FirebaseAppHostingBuildSourceContainerOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingBuildSourceContainer;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---


### FirebaseAppHostingBuildSourceOutputReference <a name="FirebaseAppHostingBuildSourceOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase">putCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase">resetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodebase` <a name="putCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase"></a>

```typescript
public putCodebase(value: FirebaseAppHostingBuildSourceCodebase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer"></a>

```typescript
public putContainer(value: FirebaseAppHostingBuildSourceContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `resetCodebase` <a name="resetCodebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase"></a>

```typescript
public resetCodebase(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase">codebase</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput">codebaseInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codebase`<sup>Required</sup> <a name="codebase" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase"></a>

```typescript
public readonly codebase: FirebaseAppHostingBuildSourceCodebaseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container"></a>

```typescript
public readonly container: FirebaseAppHostingBuildSourceContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a>

---

##### `codebaseInput`<sup>Optional</sup> <a name="codebaseInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput"></a>

```typescript
public readonly codebaseInput: FirebaseAppHostingBuildSourceCodebase;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: FirebaseAppHostingBuildSourceContainer;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FirebaseAppHostingBuildSource;
```

- *Type:* <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---


### FirebaseAppHostingBuildTimeoutsOutputReference <a name="FirebaseAppHostingBuildTimeoutsOutputReference" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer"></a>

```typescript
import { firebaseAppHostingBuild } from '@cdktf/provider-google'

new firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | FirebaseAppHostingBuildTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---



