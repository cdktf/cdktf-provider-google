# `eventarcGoogleApiSource` Submodule <a name="`eventarcGoogleApiSource` Submodule" id="@cdktf/provider-google.eventarcGoogleApiSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventarcGoogleApiSource <a name="EventarcGoogleApiSource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source google_eventarc_google_api_source}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

new eventarcGoogleApiSource.EventarcGoogleApiSource(scope: Construct, id: string, config: EventarcGoogleApiSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig">EventarcGoogleApiSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig">EventarcGoogleApiSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetCryptoKeyName">resetCryptoKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig"></a>

```typescript
public putLoggingConfig(value: EventarcGoogleApiSourceLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts"></a>

```typescript
public putTimeouts(value: EventarcGoogleApiSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetCryptoKeyName` <a name="resetCryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetCryptoKeyName"></a>

```typescript
public resetCryptoKeyName(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetLoggingConfig"></a>

```typescript
public resetLoggingConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EventarcGoogleApiSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EventarcGoogleApiSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EventarcGoogleApiSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EventarcGoogleApiSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EventarcGoogleApiSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference">EventarcGoogleApiSourceLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference">EventarcGoogleApiSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyNameInput">cryptoKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceIdInput">googleApiSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceId">googleApiSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: EventarcGoogleApiSourceLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference">EventarcGoogleApiSourceLoggingConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcGoogleApiSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference">EventarcGoogleApiSourceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoKeyNameInput`<sup>Optional</sup> <a name="cryptoKeyNameInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyNameInput"></a>

```typescript
public readonly cryptoKeyNameInput: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `googleApiSourceIdInput`<sup>Optional</sup> <a name="googleApiSourceIdInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceIdInput"></a>

```typescript
public readonly googleApiSourceIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.loggingConfigInput"></a>

```typescript
public readonly loggingConfigInput: EventarcGoogleApiSourceLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EventarcGoogleApiSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `cryptoKeyName`<sup>Required</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.googleApiSourceId"></a>

```typescript
public readonly googleApiSourceId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EventarcGoogleApiSourceConfig <a name="EventarcGoogleApiSourceConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.Initializer"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

const eventarcGoogleApiSourceConfig: eventarcGoogleApiSource.EventarcGoogleApiSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.destination">destination</a></code> | <code>string</code> | Destination is the message bus that the GoogleApiSource is delivering to. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.googleApiSourceId">googleApiSourceId</a></code> | <code>string</code> | The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Resource annotations. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.cryptoKeyName">cryptoKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.displayName">displayName</a></code> | <code>string</code> | Resource display name. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Destination is the message bus that the GoogleApiSource is delivering to.

It must be point to the full resource name of a MessageBus. Format:
"projects/{PROJECT_ID}/locations/{region}/messagesBuses/{MESSAGE_BUS_ID)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#destination EventarcGoogleApiSource#destination}

---

##### `googleApiSourceId`<sup>Required</sup> <a name="googleApiSourceId" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.googleApiSourceId"></a>

```typescript
public readonly googleApiSourceId: string;
```

- *Type:* string

The user-provided ID to be assigned to the GoogleApiSource. It should match the format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#google_api_source_id EventarcGoogleApiSource#google_api_source_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#location EventarcGoogleApiSource#location}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource annotations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#annotations EventarcGoogleApiSource#annotations}

---

##### `cryptoKeyName`<sup>Optional</sup> <a name="cryptoKeyName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.cryptoKeyName"></a>

```typescript
public readonly cryptoKeyName: string;
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt their event data.

It must match the pattern
'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#crypto_key_name EventarcGoogleApiSource#crypto_key_name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Resource display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#display_name EventarcGoogleApiSource#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#id EventarcGoogleApiSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#labels EventarcGoogleApiSource#labels}

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.loggingConfig"></a>

```typescript
public readonly loggingConfig: EventarcGoogleApiSourceLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#logging_config EventarcGoogleApiSource#logging_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#project EventarcGoogleApiSource#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EventarcGoogleApiSourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#timeouts EventarcGoogleApiSource#timeouts}

---

### EventarcGoogleApiSourceLoggingConfig <a name="EventarcGoogleApiSourceLoggingConfig" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.Initializer"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

const eventarcGoogleApiSourceLoggingConfig: eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.property.logSeverity">logSeverity</a></code> | <code>string</code> | The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. |

---

##### `logSeverity`<sup>Optional</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig.property.logSeverity"></a>

```typescript
public readonly logSeverity: string;
```

- *Type:* string

The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry.

Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#log_severity EventarcGoogleApiSource#log_severity}

---

### EventarcGoogleApiSourceTimeouts <a name="EventarcGoogleApiSourceTimeouts" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.Initializer"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

const eventarcGoogleApiSourceTimeouts: eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#create EventarcGoogleApiSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#delete EventarcGoogleApiSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/eventarc_google_api_source#update EventarcGoogleApiSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventarcGoogleApiSourceLoggingConfigOutputReference <a name="EventarcGoogleApiSourceLoggingConfigOutputReference" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

new eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity">resetLogSeverity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogSeverity` <a name="resetLogSeverity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.resetLogSeverity"></a>

```typescript
public resetLogSeverity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput">logSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity">logSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logSeverityInput`<sup>Optional</sup> <a name="logSeverityInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverityInput"></a>

```typescript
public readonly logSeverityInput: string;
```

- *Type:* string

---

##### `logSeverity`<sup>Required</sup> <a name="logSeverity" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.logSeverity"></a>

```typescript
public readonly logSeverity: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EventarcGoogleApiSourceLoggingConfig;
```

- *Type:* <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceLoggingConfig">EventarcGoogleApiSourceLoggingConfig</a>

---


### EventarcGoogleApiSourceTimeoutsOutputReference <a name="EventarcGoogleApiSourceTimeoutsOutputReference" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { eventarcGoogleApiSource } from '@cdktf/provider-google'

new eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EventarcGoogleApiSourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.eventarcGoogleApiSource.EventarcGoogleApiSourceTimeouts">EventarcGoogleApiSourceTimeouts</a>

---



