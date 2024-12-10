# `siteVerificationWebResource` Submodule <a name="`siteVerificationWebResource` Submodule" id="@cdktf/provider-google.siteVerificationWebResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SiteVerificationWebResource <a name="SiteVerificationWebResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource google_site_verification_web_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

new siteVerificationWebResource.SiteVerificationWebResource(scope: Construct, id: string, config: SiteVerificationWebResourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig">SiteVerificationWebResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig">SiteVerificationWebResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite">putSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSite` <a name="putSite" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite"></a>

```typescript
public putSite(value: SiteVerificationWebResourceSite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putSite.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts"></a>

```typescript
public putTimeouts(value: SiteVerificationWebResourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SiteVerificationWebResource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

siteVerificationWebResource.SiteVerificationWebResource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SiteVerificationWebResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SiteVerificationWebResource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SiteVerificationWebResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SiteVerificationWebResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.owners">owners</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.site">site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference">SiteVerificationWebResourceSiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference">SiteVerificationWebResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.webResourceId">webResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.siteInput">siteInput</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethodInput">verificationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethod">verificationMethod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `owners`<sup>Required</sup> <a name="owners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.owners"></a>

```typescript
public readonly owners: string[];
```

- *Type:* string[]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.site"></a>

```typescript
public readonly site: SiteVerificationWebResourceSiteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference">SiteVerificationWebResourceSiteOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeouts"></a>

```typescript
public readonly timeouts: SiteVerificationWebResourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference">SiteVerificationWebResourceTimeoutsOutputReference</a>

---

##### `webResourceId`<sup>Required</sup> <a name="webResourceId" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.webResourceId"></a>

```typescript
public readonly webResourceId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `siteInput`<sup>Optional</sup> <a name="siteInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.siteInput"></a>

```typescript
public readonly siteInput: SiteVerificationWebResourceSite;
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SiteVerificationWebResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---

##### `verificationMethodInput`<sup>Optional</sup> <a name="verificationMethodInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethodInput"></a>

```typescript
public readonly verificationMethodInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.verificationMethod"></a>

```typescript
public readonly verificationMethod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SiteVerificationWebResourceConfig <a name="SiteVerificationWebResourceConfig" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.Initializer"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

const siteVerificationWebResourceConfig: siteVerificationWebResource.SiteVerificationWebResourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.site">site</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | site block. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.verificationMethod">verificationMethod</a></code> | <code>string</code> | The verification method for the Site Verification system to use to verify this site or domain. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.site"></a>

```typescript
public readonly site: SiteVerificationWebResourceSite;
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

site block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#site SiteVerificationWebResource#site}

---

##### `verificationMethod`<sup>Required</sup> <a name="verificationMethod" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.verificationMethod"></a>

```typescript
public readonly verificationMethod: string;
```

- *Type:* string

The verification method for the Site Verification system to use to verify this site or domain.

Possible values: ["ANALYTICS", "DNS_CNAME", "DNS_TXT", "FILE", "META", "TAG_MANAGER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#verification_method SiteVerificationWebResource#verification_method}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#id SiteVerificationWebResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SiteVerificationWebResourceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#timeouts SiteVerificationWebResource#timeouts}

---

### SiteVerificationWebResourceSite <a name="SiteVerificationWebResourceSite" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.Initializer"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

const siteVerificationWebResourceSite: siteVerificationWebResource.SiteVerificationWebResourceSite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.identifier">identifier</a></code> | <code>string</code> | The site identifier. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.type">type</a></code> | <code>string</code> | The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"]. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

The site identifier.

If the type is set to SITE, the identifier is a URL. If the type is
set to INET_DOMAIN, the identifier is a domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#identifier SiteVerificationWebResource#identifier}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#type SiteVerificationWebResource#type}

---

### SiteVerificationWebResourceTimeouts <a name="SiteVerificationWebResourceTimeouts" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.Initializer"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

const siteVerificationWebResourceTimeouts: siteVerificationWebResource.SiteVerificationWebResourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#create SiteVerificationWebResource#create}. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#delete SiteVerificationWebResource#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#create SiteVerificationWebResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.13.0/docs/resources/site_verification_web_resource#delete SiteVerificationWebResource#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SiteVerificationWebResourceSiteOutputReference <a name="SiteVerificationWebResourceSiteOutputReference" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

new siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SiteVerificationWebResourceSite;
```

- *Type:* <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceSite">SiteVerificationWebResourceSite</a>

---


### SiteVerificationWebResourceTimeoutsOutputReference <a name="SiteVerificationWebResourceTimeoutsOutputReference" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { siteVerificationWebResource } from '@cdktf/provider-google'

new siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SiteVerificationWebResourceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.siteVerificationWebResource.SiteVerificationWebResourceTimeouts">SiteVerificationWebResourceTimeouts</a>

---



