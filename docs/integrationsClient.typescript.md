# `integrationsClient` Submodule <a name="`integrationsClient` Submodule" id="@cdktf/provider-google.integrationsClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationsClient <a name="IntegrationsClient" id="@cdktf/provider-google.integrationsClient.IntegrationsClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client google_integrations_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

new integrationsClient.IntegrationsClient(scope: Construct, id: string, config: IntegrationsClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig">IntegrationsClientConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig">IntegrationsClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig">putCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCloudKmsConfig">resetCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleIntegrations">resetCreateSampleIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleWorkflows">resetCreateSampleWorkflows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetProvisionGmek">resetProvisionGmek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetRunAsServiceAccount">resetRunAsServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudKmsConfig` <a name="putCloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig"></a>

```typescript
public putCloudKmsConfig(value: IntegrationsClientCloudKmsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putCloudKmsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putTimeouts"></a>

```typescript
public putTimeouts(value: IntegrationsClientTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---

##### `resetCloudKmsConfig` <a name="resetCloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCloudKmsConfig"></a>

```typescript
public resetCloudKmsConfig(): void
```

##### `resetCreateSampleIntegrations` <a name="resetCreateSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleIntegrations"></a>

```typescript
public resetCreateSampleIntegrations(): void
```

##### `resetCreateSampleWorkflows` <a name="resetCreateSampleWorkflows" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetCreateSampleWorkflows"></a>

```typescript
public resetCreateSampleWorkflows(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetProvisionGmek` <a name="resetProvisionGmek" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetProvisionGmek"></a>

```typescript
public resetProvisionGmek(): void
```

##### `resetRunAsServiceAccount` <a name="resetRunAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetRunAsServiceAccount"></a>

```typescript
public resetRunAsServiceAccount(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationsClient resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isConstruct"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

integrationsClient.IntegrationsClient.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformElement"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

integrationsClient.IntegrationsClient.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformResource"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

integrationsClient.IntegrationsClient.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

integrationsClient.IntegrationsClient.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IntegrationsClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationsClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationsClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationsClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference">IntegrationsClientCloudKmsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference">IntegrationsClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfigInput">cloudKmsConfigInput</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrationsInput">createSampleIntegrationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleWorkflowsInput">createSampleWorkflowsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisionGmekInput">provisionGmekInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccountInput">runAsServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrations">createSampleIntegrations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleWorkflows">createSampleWorkflows</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisionGmek">provisionGmek</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccount">runAsServiceAccount</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudKmsConfig`<sup>Required</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfig"></a>

```typescript
public readonly cloudKmsConfig: IntegrationsClientCloudKmsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference">IntegrationsClientCloudKmsConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationsClientTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference">IntegrationsClientTimeoutsOutputReference</a>

---

##### `cloudKmsConfigInput`<sup>Optional</sup> <a name="cloudKmsConfigInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.cloudKmsConfigInput"></a>

```typescript
public readonly cloudKmsConfigInput: IntegrationsClientCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---

##### `createSampleIntegrationsInput`<sup>Optional</sup> <a name="createSampleIntegrationsInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrationsInput"></a>

```typescript
public readonly createSampleIntegrationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createSampleWorkflowsInput`<sup>Optional</sup> <a name="createSampleWorkflowsInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleWorkflowsInput"></a>

```typescript
public readonly createSampleWorkflowsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `provisionGmekInput`<sup>Optional</sup> <a name="provisionGmekInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisionGmekInput"></a>

```typescript
public readonly provisionGmekInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsServiceAccountInput`<sup>Optional</sup> <a name="runAsServiceAccountInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccountInput"></a>

```typescript
public readonly runAsServiceAccountInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IntegrationsClientTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---

##### `createSampleIntegrations`<sup>Required</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleIntegrations"></a>

```typescript
public readonly createSampleIntegrations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createSampleWorkflows`<sup>Required</sup> <a name="createSampleWorkflows" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.createSampleWorkflows"></a>

```typescript
public readonly createSampleWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `provisionGmek`<sup>Required</sup> <a name="provisionGmek" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.provisionGmek"></a>

```typescript
public readonly provisionGmek: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `runAsServiceAccount`<sup>Required</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.runAsServiceAccount"></a>

```typescript
public readonly runAsServiceAccount: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClient.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.integrationsClient.IntegrationsClient.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationsClientCloudKmsConfig <a name="IntegrationsClientCloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.Initializer"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

const integrationsClientCloudKmsConfig: integrationsClient.IntegrationsClientCloudKmsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.key">key</a></code> | <code>string</code> | A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsLocation">kmsLocation</a></code> | <code>string</code> | Location name of the key ring, e.g. "us-west1". |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsRing">kmsRing</a></code> | <code>string</code> | A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.keyVersion">keyVersion</a></code> | <code>string</code> | Each version of a key contains key material used for encryption or signing. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsProjectId">kmsProjectId</a></code> | <code>string</code> | The Google Cloud project id of the project where the kms key stored. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A Cloud KMS key is a named object containing one or more key versions, along with metadata for the key.

A key exists on exactly one key ring tied to a
specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#key IntegrationsClient#key}

---

##### `kmsLocation`<sup>Required</sup> <a name="kmsLocation" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsLocation"></a>

```typescript
public readonly kmsLocation: string;
```

- *Type:* string

Location name of the key ring, e.g. "us-west1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#kms_location IntegrationsClient#kms_location}

---

##### `kmsRing`<sup>Required</sup> <a name="kmsRing" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsRing"></a>

```typescript
public readonly kmsRing: string;
```

- *Type:* string

A key ring organizes keys in a specific Google Cloud location and allows you to manage access control on groups of keys.

A key ring's name does not need to be
unique across a Google Cloud project, but must be unique within a given location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#kms_ring IntegrationsClient#kms_ring}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

Each version of a key contains key material used for encryption or signing.

A key's version is represented by an integer, starting at 1. To decrypt data
or verify a signature, you must use the same key version that was used to
encrypt or sign the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#key_version IntegrationsClient#key_version}

---

##### `kmsProjectId`<sup>Optional</sup> <a name="kmsProjectId" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig.property.kmsProjectId"></a>

```typescript
public readonly kmsProjectId: string;
```

- *Type:* string

The Google Cloud project id of the project where the kms key stored.

If empty,
the kms key is stored at the same project as customer's project and ecrypted
with CMEK, otherwise, the kms key is stored in the tenant project and
encrypted with GMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#kms_project_id IntegrationsClient#kms_project_id}

---

### IntegrationsClientConfig <a name="IntegrationsClientConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.Initializer"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

const integrationsClientConfig: integrationsClient.IntegrationsClientConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.location">location</a></code> | <code>string</code> | Location in which client needs to be provisioned. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.cloudKmsConfig">cloudKmsConfig</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | cloud_kms_config block. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleIntegrations">createSampleIntegrations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if sample integrations should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleWorkflows">createSampleWorkflows</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if sample workflow should be created along with provisioning. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#id IntegrationsClient#id}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#project IntegrationsClient#project}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provisionGmek">provisionGmek</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates provision with GMEK or CMEK. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.runAsServiceAccount">runAsServiceAccount</a></code> | <code>string</code> | User input run-as service account, if empty, will bring up a new default service account. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location in which client needs to be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#location IntegrationsClient#location}

---

##### `cloudKmsConfig`<sup>Optional</sup> <a name="cloudKmsConfig" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.cloudKmsConfig"></a>

```typescript
public readonly cloudKmsConfig: IntegrationsClientCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

cloud_kms_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#cloud_kms_config IntegrationsClient#cloud_kms_config}

---

##### `createSampleIntegrations`<sup>Optional</sup> <a name="createSampleIntegrations" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleIntegrations"></a>

```typescript
public readonly createSampleIntegrations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if sample integrations should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#create_sample_integrations IntegrationsClient#create_sample_integrations}

---

##### `createSampleWorkflows`<sup>Optional</sup> <a name="createSampleWorkflows" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.createSampleWorkflows"></a>

```typescript
public readonly createSampleWorkflows: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if sample workflow should be created along with provisioning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#create_sample_workflows IntegrationsClient#create_sample_workflows}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#id IntegrationsClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#project IntegrationsClient#project}.

---

##### `provisionGmek`<sup>Optional</sup> <a name="provisionGmek" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.provisionGmek"></a>

```typescript
public readonly provisionGmek: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates provision with GMEK or CMEK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#provision_gmek IntegrationsClient#provision_gmek}

---

##### `runAsServiceAccount`<sup>Optional</sup> <a name="runAsServiceAccount" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.runAsServiceAccount"></a>

```typescript
public readonly runAsServiceAccount: string;
```

- *Type:* string

User input run-as service account, if empty, will bring up a new default service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#run_as_service_account IntegrationsClient#run_as_service_account}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClientConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IntegrationsClientTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#timeouts IntegrationsClient#timeouts}

---

### IntegrationsClientTimeouts <a name="IntegrationsClientTimeouts" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.Initializer"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

const integrationsClientTimeouts: integrationsClient.IntegrationsClientTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#create IntegrationsClient#create}. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#delete IntegrationsClient#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#create IntegrationsClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.34.0/docs/resources/integrations_client#delete IntegrationsClient#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### IntegrationsClientCloudKmsConfigOutputReference <a name="IntegrationsClientCloudKmsConfigOutputReference" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

new integrationsClient.IntegrationsClientCloudKmsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId">resetKmsProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKeyVersion"></a>

```typescript
public resetKeyVersion(): void
```

##### `resetKmsProjectId` <a name="resetKmsProjectId" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.resetKmsProjectId"></a>

```typescript
public resetKmsProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput">keyVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput">kmsLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput">kmsProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput">kmsRingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersion">keyVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation">kmsLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId">kmsProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRing">kmsRing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersionInput"></a>

```typescript
public readonly keyVersionInput: string;
```

- *Type:* string

---

##### `kmsLocationInput`<sup>Optional</sup> <a name="kmsLocationInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocationInput"></a>

```typescript
public readonly kmsLocationInput: string;
```

- *Type:* string

---

##### `kmsProjectIdInput`<sup>Optional</sup> <a name="kmsProjectIdInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectIdInput"></a>

```typescript
public readonly kmsProjectIdInput: string;
```

- *Type:* string

---

##### `kmsRingInput`<sup>Optional</sup> <a name="kmsRingInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRingInput"></a>

```typescript
public readonly kmsRingInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.keyVersion"></a>

```typescript
public readonly keyVersion: string;
```

- *Type:* string

---

##### `kmsLocation`<sup>Required</sup> <a name="kmsLocation" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsLocation"></a>

```typescript
public readonly kmsLocation: string;
```

- *Type:* string

---

##### `kmsProjectId`<sup>Required</sup> <a name="kmsProjectId" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsProjectId"></a>

```typescript
public readonly kmsProjectId: string;
```

- *Type:* string

---

##### `kmsRing`<sup>Required</sup> <a name="kmsRing" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.kmsRing"></a>

```typescript
public readonly kmsRing: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IntegrationsClientCloudKmsConfig;
```

- *Type:* <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientCloudKmsConfig">IntegrationsClientCloudKmsConfig</a>

---


### IntegrationsClientTimeoutsOutputReference <a name="IntegrationsClientTimeoutsOutputReference" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer"></a>

```typescript
import { integrationsClient } from '@cdktf/provider-google'

new integrationsClient.IntegrationsClientTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.integrationsClient.IntegrationsClientTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IntegrationsClientTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.integrationsClient.IntegrationsClientTimeouts">IntegrationsClientTimeouts</a>

---



