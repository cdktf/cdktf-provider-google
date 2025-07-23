# `dataGoogleArtifactRegistryRepositoryIamPolicy` Submodule <a name="`dataGoogleArtifactRegistryRepositoryIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryRepositoryIamPolicy <a name="DataGoogleArtifactRegistryRepositoryIamPolicy" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy google_artifact_registry_repository_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositoryIamPolicy } from '@cdktf/provider-google'

new dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy(scope: Construct, id: string, config: DataGoogleArtifactRegistryRepositoryIamPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig">DataGoogleArtifactRegistryRepositoryIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig">DataGoogleArtifactRegistryRepositoryIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.resetProject"></a>

```typescript
public resetProject(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryRepositoryIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isConstruct"></a>

```typescript
import { dataGoogleArtifactRegistryRepositoryIamPolicy } from '@cdktf/provider-google'

dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement"></a>

```typescript
import { dataGoogleArtifactRegistryRepositoryIamPolicy } from '@cdktf/provider-google'

dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformDataSource"></a>

```typescript
import { dataGoogleArtifactRegistryRepositoryIamPolicy } from '@cdktf/provider-google'

dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport"></a>

```typescript
import { dataGoogleArtifactRegistryRepositoryIamPolicy } from '@cdktf/provider-google'

dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryRepositoryIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleArtifactRegistryRepositoryIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleArtifactRegistryRepositoryIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryRepositoryIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.policyData">policyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.repositoryInput">repositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.repository">repository</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.policyData"></a>

```typescript
public readonly policyData: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.repositoryInput"></a>

```typescript
public readonly repositoryInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryRepositoryIamPolicyConfig <a name="DataGoogleArtifactRegistryRepositoryIamPolicyConfig" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.Initializer"></a>

```typescript
import { dataGoogleArtifactRegistryRepositoryIamPolicy } from '@cdktf/provider-google'

const dataGoogleArtifactRegistryRepositoryIamPolicyConfig: dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.repository">repository</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#repository DataGoogleArtifactRegistryRepositoryIamPolicy#repository}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#id DataGoogleArtifactRegistryRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#location DataGoogleArtifactRegistryRepositoryIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#project DataGoogleArtifactRegistryRepositoryIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#repository DataGoogleArtifactRegistryRepositoryIamPolicy#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#id DataGoogleArtifactRegistryRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#location DataGoogleArtifactRegistryRepositoryIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dataGoogleArtifactRegistryRepositoryIamPolicy.DataGoogleArtifactRegistryRepositoryIamPolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/data-sources/artifact_registry_repository_iam_policy#project DataGoogleArtifactRegistryRepositoryIamPolicy#project}.

---



